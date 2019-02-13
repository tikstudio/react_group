import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopProduct extends Component {
  render() {
    const {image, name, price} = this.props.item
    return (
      <Link to="/product/1" className="block1">
        <img src={image} alt=""/>
        <span className="price">
          <span>{name}</span>
          <span>
            <small>$</small>
            {price}
          </span>
          <strong/>
        </span>
      </Link>
    );
  }
}

export default TopProduct;
