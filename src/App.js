import React, {Component} from 'react';
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    const list = [
      {id: 1, name: 'item 1'},
      {id: 456, name: 'item 3'},
      {id: 1231, name: 'test'},
    ]
    this.state = {
      date: new Date(),
      list: list,
    }

  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.updateTime();
    // }, 1000);
  }

  componentWillUnmount() {
    console.log('componentDidMount');
    clearInterval(this.interval)
  }


  updateTime = () => {
    this.setState({
      date: new Date(),
    })
  }

  addList = () => {
    const {list} = this.state
    list.push({
      id: list[list.length - 1].id + 1,
      name: 'test test test'
    })
    this.setState({list})
  }

  render() {
    return (
      <div className="test">
        <h1>
          {this.state.date.getHours()}
          {' : '}
          {this.state.date.getMinutes()}
          {' : '}
          {this.state.date.getSeconds()}
        </h1>
        <List data={this.state.list}/>
        <button onClick={this.addList}>add</button>
      </div>
    );
  }
}

export default App;
