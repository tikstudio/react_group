import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../store/actions";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes: {
    addTodo: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }


  handleChange = (ev) => {
    this.setState({value: ev.target.value})
  }

  cancel = () => {
    this.setState({value: ''})
  }

  add = () => {
    const {value} = this.state;
    if (value) {
      this.props.addTodo(value);
      this.cancel();
    }
  }

  handleKeyPress = (ev) => {
    const key = ev.which || ev.keyCode;
    if (key === 13) {
      this.add();
    }
  }

  render() {
    const {value} = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={value}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}/>
        </div>
        <button
          className="cancel"
          onClick={this.cancel}>
          Cancel
        </button>
        <button
          className="add"
          onClick={this.add}>
          Add Todo
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addTodo,
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
