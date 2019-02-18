import React, {Component} from 'react';

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

import {
  BrowserRouter, Route, Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
