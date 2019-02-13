import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Product extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="grid_3">
        <Link to="#" className="gal">
          <img src={data.image} alt={data.name}/>
          <span></span>
        </Link>
        <div className="col2">
          <span className="col3">
            <Link to="#">{data.name}</Link>
          </span> $ {data.price}
        </div>
      </div>
    );
  }
}

export default Product;
