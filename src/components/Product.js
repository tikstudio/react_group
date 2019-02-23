import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Emitter from "../helper/Emitter";
import {addProduct} from "../helper/cart";

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      openDescription: false
    }
  }

  openModal = (ev) => {
    ev.preventDefault();
    Emitter.call(
      'TOGGLE_MODAL',
      {id: this.props.data.id},
      null,
    );
  }
  addToCart = () => {
    addProduct(this.props.data.id, 1)
  }

  openDescription = ()=>{
    const {openDescription} = this.state
    this.setState({
      openDescription: !openDescription
    })
  }

  render() {
    const {data} = this.props
    const{openDescription} = this.state
    const descriptionStyle = openDescription ? {maxHeight: '500px'} : {maxHeight: '0'}
    console.log(descriptionStyle)
    return (
      <div
        className="grid_3">
        <Link
          to="#"
          onClick={this.openModal}
          className="gal">
          <img src={data.image} alt={data.name}/>
          <span></span>
        </Link>
        <div className="col2">
          <div onClick={this.addToCart}
               className="col3">
            add to cart
          </div>
          <span className="col3">
            {data.name}
          </span> ${data.price}
          <div onClick={this.openDescription} className="col3">
            More info
          </div>
          <div className="col3 description" style={descriptionStyle}>
            {data.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
