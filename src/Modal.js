import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "./Input";

class Modal extends Component {
  static propTypes = {};

  render() {
    return (
      <div id="Modal">
        <Input label="Name"/>
        <Input label="Last Name"/>
      </div>
    );
  }
}


export default Modal;
