import React, {Component} from 'react';
import data from '../data'
import Emitter from '../helper/Emitter'


class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    Emitter.add('TOGGLE_MODAL', this.toggle);
  }

  componentWillUnmount() {
    Emitter.remove('TOGGLE_MODAL', this.toggle);
  }

  toggle = (param, error) => {
    this.setState({open: param.id})
  }

  hide = (ev) => {
    if (ev.target.classList.contains('placeholder')) {
      this.setState({open: false})
    }
  }

  render() {
    if (!this.state.open) {
      return null
    }
    const {products} = data
    let product
    let nextId = null;
    let prevId = null;
    products.forEach((p, i) => {
      if (p.id === this.state.open) {
        product = p
        prevId = products[i - 1] ? products[i - 1].id : null;
        nextId = products[i + 1] ? products[i + 1].id : null;
      }
    });
    return (
      <div
        style={{display: 'block'}}
        id="galleryOverlay"
        className="visible">
        <div id="gallerySlider">
          <div
            onClick={this.hide}
            className="placeholder">
            <img src={product.image} alt={product.name}/>
          </div>
        </div>
        {!!prevId && <div id="prevArrow" onClick={() => this.toggle(prevId)}/>}
        {!!nextId && <div id="nextArrow" onClick={() => this.toggle(nextId)}/>}
      </div>
    );
  }
}

export default ProductModal;
