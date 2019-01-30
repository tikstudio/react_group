import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  };

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="text"/>
      </label>
    );
  }
}


export default Input;
