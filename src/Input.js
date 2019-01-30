import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  };

  render() {
    const {label, ...prop} = this.props
    return (
      <label>
        <span>{label}</span>
        <input type="text" {...prop} />
      </label>
    );
  }
}


export default Input;
