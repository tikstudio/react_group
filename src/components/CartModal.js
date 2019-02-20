import React, {Component} from 'react';
import data from "../data";
import {getCart} from "../helper/cart";

class CartModal extends Component {
  render() {
    const {products} = data;
    const localCart = getCart();
    const fProd = products.filter((p) => localCart[p.id])
    if (!fProd.length) {
      return (
        <h2>Your cart is empty</h2>
      )
    }
    return (
      <div className="CartModal">
        {fProd.map((pr) => (
          <div key={pr.id}>{pr.name}</div>
        ))}
      </div>
    );
  }
}

export default CartModal;
