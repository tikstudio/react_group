import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

// import PropTypes from 'prop-types'

class MenuItem extends Component {
  render() {
    const {to, children} = this.props
    const {pathname} = this.props.history.location
    return (
      <li className={`bt-icon ${pathname === to ? 'current' : ''}`}>
        <Link to={to}>
          {children}
        </Link>
      </li>
    );
  }
}

export default withRouter(MenuItem);
