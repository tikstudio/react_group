import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import { getCart, setProduct, getTotal, showCartModal} from "../helper/cart";
import data from '../data'
import Emitter from "../helper/Emitter";
import {Link} from "react-router-dom";

class CartModal extends Component {

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
            <div className={'CartModal'} onClick={showCartModal}>
                <table>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>name</th>
                        <th>qty</th>
                        <th>price</th>

                    </tr>
                    </thead>
                    <tbody>
                    {fProd.map((p) => (
                        <tr key={p.id}>
                            <td>
                                <img height="100" src={p.image} alt={p.name}/>
                            </td>
                            <td>{p.name}</td>
                            <td>
                                <input
                                    onBlur={(ev) => setProduct(p.id, ev.target.value)}
                                    onChange={(ev) => this.handleChange(ev, p.id)}
                                    type="number" min="0"
                                    value={cart[p.id]}
                                />
                            </td>
                            <td>{(p.price * cart[p.id]).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><Link to="/cart"> Go to Cart</Link></td>
                        <td colSpan="3" style={{textAlign: 'right'}}>Total Price - {getTotal()}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CartModal;
