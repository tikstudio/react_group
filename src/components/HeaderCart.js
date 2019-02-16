import React, {Component} from 'react';
import {getTotal, getTotalProducts} from "../helper/cart";
import Emitter from "../helper/Emitter";

class HeaderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: getTotalProducts(),
      total: getTotal()
    }

    Emitter.add('UPDATE_CART', this.cartUpdate)
  }

  cartUpdate = () => {
    this.setState({
      totalCount: getTotalProducts(),
      total: getTotal(),
    })
  }

  render() {
    return (
      <div className="HeaderCart">
        <img width="25" height="25" src="/images/shopping-cart.svg" alt="cart"/>
        {this.state.totalCount}
        ----
        {this.state.total}
      </div>
    );
  }
}

export default HeaderCart;
