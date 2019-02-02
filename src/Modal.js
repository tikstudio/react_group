import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "./Input";

class Modal extends Component {
  static propTypes = {
    inputChange: PropTypes.func.isRequired
  };

  closeModal = (ev) => {
    if (ev.target.getAttribute('id') === "Modal") {
      this.props.toggleModal(false)
    }
  }

  render() {
    return (
      <div
        id="Modal"
        onClick={this.closeModal}>
        <div className="form">
          <Input
            onChange={(ev) => this.props.inputChange(ev.target.value, 'name')}
            label="Name"
            value={this.props.modal.name}/>
          <Input
            onChange={(ev) => this.props.inputChange(ev.target.value, 'lName')}
            label="Last Name"
            value={this.props.modal.lName}/>
          <Input
            onChange={(ev) => this.props.inputChange(ev.target.value, 'phone')}
            label="Phone"
            value={this.props.modal.phone}/>
          <Input
            onChange={(ev) => this.props.inputChange(ev.target.value, 'row')}
            label="Row"
            value={this.props.modal.row}
            readOnly="readonly"/>
          <Input
            onChange={(ev) => this.props.inputChange(ev.target.value, 'col')}
            label="Seat"
            value={this.props.modal.col}
            readOnly="readonly"/>
          <button onClick={this.props.save}>Save</button>
          <button onClick={this.props.delete}>Delete</button>
        </div>
      </div>
    );
  }
}


export default Modal;
