import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {modalEvent} from "./ProductModal";

class Product extends Component {
  openModal = () => {
    modalEvent.emit('toggle', this.props.data.id)
  }

  render() {
    const {data} = this.props
    return (
      <div
        onClick={this.openModal}
        className="grid_3">
        <Link
          to="#"
          onClick={(ev) => ev.preventDefault()}
          className="gal">
          <img src={data.image} alt={data.name}/>
          <span></span>
        </Link>
        <div className="col2">
          <span className="col3">
            {data.name}
          </span> $ {data.price}
        </div>
      </div>
    );
  }
}

export default Product;
