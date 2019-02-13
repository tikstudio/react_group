import React, {Component} from 'react';
import {Link} from "react-router-dom";

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
          <div className="grid_12">
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
            <div className="menu_block">
              <nav id="bt-menu"
                   className={`bt-menu ${this.state.menuOpen ? 'bt-menu-open' : ''}`}>
                <div onClick={this.toggleMenu} className="bt-menu-trigger">
                  <span>Menu</span>
                </div>
                <ul>
                  <li className="current bt-icon ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="bt-icon">
                    <Link to="index-1.html">About</Link>
                  </li>
                  <li className="bt-icon">
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li className="bt-icon">
                    <Link to="index-3.html">Blog</Link>
                  </li>
                  <li className="bt-icon">
                    <Link to="index-4.html">Reservation</Link>
                  </li>
                  <li className="bt-icon">
                    <Link to="index-5.html">Contacts</Link>
                  </li>
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
