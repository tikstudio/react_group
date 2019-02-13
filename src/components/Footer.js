import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container_12">
          <div className="grid_6 prefix_3">
            <Link to="index.html" className="f_logo">
              <img src="images/f_logo.png" alt=""/>
            </Link>
            <div className="copy">
              &copy; 2013 |
              <Link to="#">Privacy Policy</Link> <br/> Website designed by
              <Link to="http://www.templatemonster.com/" rel="nofollow">TemplateMonster.com</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
