import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {addProduct, getCart, removeProduct, setProduct, getTotal} from "../helper/cart";
import data from '../data'
import Emitter from "../helper/Emitter";

class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cart: getCart()
    }
    Emitter.add('UPDATE_CART', this.updateCart)
  }

  updateCart = () => {
    this.setState({
      cart: getCart()
    })
  }

  handleChange = (ev, id) => {
    const {cart} = this.state;
    cart[id] = ev.target.value;
    this.setState({cart});
  }

  render() {
    const {products} = data;
    const {cart} = this.state;
    const localCart = getCart();
    const fProd = products.filter((p) => localCart[p.id])
    if (!fProd.length) {
      return (
        <Wrapper>
          <h2>Your cart is empty</h2>
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {fProd.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <img height="100" src={p.image} alt={p.name}/>
              </td>
              <td>{p.name}</td>
              <td>
                <button onClick={() => addProduct(p.id, -1)}>-</button>
                <input
                  onBlur={(ev) => setProduct(p.id, ev.target.value)}
                  onChange={(ev) => this.handleChange(ev, p.id)}
                  type="number" min="0"
                  value={cart[p.id]}
                />
                <button onClick={() => addProduct(p.id, 1)}>+</button>
              </td>
              <td>{(p.price * cart[p.id]).toFixed(2)}</td>
              <td>
                <button onClick={() => removeProduct(p.id)}>x</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colspan="5" style={{textAlign: 'right'}}>Total Praice - {getTotal()}</td>
          </tr>
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default Cart;
