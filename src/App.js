import React, {Component} from 'react';
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.rowArr = [];
    this.colArr = [];
    for (let i = 1; i <= 10; i++) {
      this.rowArr.push(i)
    }
    for (let i = 1; i <= 20; i++) {
      this.colArr.push(i)
    }
  }

  handleClick = (row, col) => {
    console.log(row, col);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
          {this.rowArr.map((row) => (
            <tr key={row}>
              {this.colArr.map((col) => (
                <td
                  onClick={() => this.handleClick(row, col)}
                  key={col}
                >
                  {`${row}/${col}`}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
        <Modal/>
      </div>
    );
  }
}


export default App;
