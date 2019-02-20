import React, {Component} from 'react';
import {getTotal, getTotalProducts} from "../helper/cart";
import Emitter from "../helper/Emitter";
import {Link} from "react-router-dom";
import CartModal from "./CartModal";

class HeaderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: getTotalProducts(),
      total: getTotal(),
      modalOpen: false,
    }

    Emitter.add('UPDATE_CART', this.cartUpdate)
  }

  cartUpdate = () => {
    this.setState({
      totalCount: getTotalProducts(),
      total: getTotal(),
    })
  }

  showModal = () => {
    this.setState({modalOpen: true})
  }

  hideModal = () => {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <div
        onMouseLeave={this.hideModal}
        onMouseEnter={this.showModal}
        className="HeaderCart">
        <Link to="/cart">
          <img width="25" height="25" src="/images/shopping-cart.svg" alt="cart"/>
        </Link>
        {this.state.totalCount}
        {this.state.modalOpen && <CartModal/>}
      </div>
    );
  }
}

export default HeaderCart;
