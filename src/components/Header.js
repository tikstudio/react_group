import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HeaderCart from "./HeaderCart";
import MenuItem from "./menu/MenuItem";

class Header extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <header>
        <div className="container_12">
          <div className="grid_12 header_content">
            <div className="socials">
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#" className="last"></Link>
            </div>
            <h1>
              <Link to="index.html">
                <img src="/images/logo.png" alt="Boo House"/>
              </Link>
            </h1>
            <HeaderCart/>
            <div className="menu_block">
              <nav id="bt-menu"
                   className={`bt-menu ${this.state.menuOpen ? 'bt-menu-open' : ''}`}>
                <div onClick={this.toggleMenu} className="bt-menu-trigger">
                  <span>Menu</span>
                </div>
                <ul>
                  <MenuItem to="/">
                    Home
                  </MenuItem>
                  <MenuItem to="/about">
                    About
                  </MenuItem>
                  <MenuItem to="/menu">
                    menu
                  </MenuItem>
                  <MenuItem to="/blog">
                    Blog
                  </MenuItem>
                  <MenuItem to="/reservation">
                    Reservation
                  </MenuItem>
                  <MenuItem to="/contacts">
                    Contacts
                  </MenuItem>
                </ul>
              </nav>
              <div className="clear"/>
            </div>
            <div className="clear"/>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
