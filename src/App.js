import React, {Component} from 'react';
import Header from "./components/Header";
import Filters from "./components/Filters";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Filters/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
