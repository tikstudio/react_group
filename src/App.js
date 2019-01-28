import React, {Component} from 'react';
import List from "./List";

const initList = [
  {id: 1, name: 'item 1'},
  {id: 456, name: 'item 3'},
  {id: 1231, name: 'test'},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      list: [...initList],
      val: '',
      searchVal: '',
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.updateTime();
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval)
  }

  updateTime = () => {
    this.setState({
      date: new Date(),
    })
  }

  handleChange = (ev) => {
    switch (ev.target.type) {
      case 'search' :
        this.setState({searchVal: ev.target.value})
        break;

      case 'text' :
        this.setState({val: ev.target.value})
        break;

      default:
        break;
    }
  }

  addList = () => {
    const {list} = this.state
    list.push({
      id: list[list.length - 1].id + 1,
      name: this.state.val
    })
    this.setState({list, val: ''})
  }

  resetList = () => {
    console.log(initList);
    this.setState({list: [...initList]})
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
        <input type="search" placeholder="search" onChange={this.handleChange}/>
        <List data={this.state.list} searchVal={this.state.searchVal}/>
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.val}/>
          <button onClick={this.addList}>add</button>
          <button onClick={this.resetList}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;
