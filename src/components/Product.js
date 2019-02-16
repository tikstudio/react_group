import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Emitter from "../helper/Emitter";
import {addProduct} from "../helper/cart";

class Product extends Component {
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

  render() {
    const {data} = this.props
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
          </span> $ {data.price}
        </div>
      </div>
    );
  }
}

export default Product;
