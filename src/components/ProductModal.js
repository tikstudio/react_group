import React, {Component} from 'react';
import EventEmitter from 'events';
import data from '../data'

export const modalEvent = new EventEmitter()

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    modalEvent.on('toggle', this.toggle);
  }

  toggle = (open) => {
    this.setState({open})
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
    const product = products.find((p) => p.id = this.state.open)

    return (
      <div
        style={{display: 'block'}}
        id="galleryOverlay"
        className="visible">
        <div id="gallerySlider">
          <div
            onClick={this.hide}
            className="placeholder">
            <img src={product.image}/>
          </div>
        </div>
        <a id="prevArrow"></a>
        <a id="nextArrow"></a>
      </div>
    );
  }
}

export default ProductModal;
