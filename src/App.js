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

    this.state = {
      modalOpen: false,
      modal: {
        name: '',
        lName: '',
        phone: '',
        row: '',
        col: '',
      }
    }
  }

  toggleModal = (modalOpen) => {
    this.setState({modalOpen})
  }

  handleClick = (row, col) => {
    this.toggleModal(true)
    const {modal} = this.state
    const data = this.getData()
    if (row in data && col in data[row]) {
      const {name, lName, phone} = data[row][col]
      modal.name = name;
      modal.lName = lName;
      modal.phone = phone;
    }
    modal.row = row;
    modal.col = col;
    this.setState({modal})
  }

  inputChange = (val, inputName) => {
    const {modal} = this.state
    modal[inputName] = val;
    this.setState({modal})
  }

  getData = () => {
    const jsonData = window.localStorage.getItem('data');

    let data
    try {
      data = JSON.parse(jsonData) || {}
    } catch (e) {
      data = {}
    }

    return data
  }

  save = () => {
    const {modal} = this.state
    const data = this.getData();
    data[modal.row] = data[modal.row] ? data[modal.row] : {}

    data[modal.row][modal.col] = {
      name: modal.name,
      lName: modal.lName,
      phone: modal.phone,
    }

    window.localStorage.setItem('data', JSON.stringify(data))
    this.toggleModal(false)
    this.setState({
      modal: {
        name: '',
        lName: '',
        phone: '',
        row: '',
        col: '',
      }
    })
  }

  isActive = (row, col) => {
    const data = this.getData();

    if (data[row] && data[row][col] && data[row][col].name) {
      return true
    }
    return false
  }

  delete = () => {
    const {col, row} = this.state.modal
    const data = this.getData();
    if (row in data && col in data[row]) {
      delete data[row][col]
      window.localStorage.setItem('data', JSON.stringify(data))
    }
    this.setState({
      modalOpen: false,
      modal: {
        name: '',
        lName: '',
        phone: '',
        row: '',
        col: '',
      }
    })
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
                  className={this.isActive(row, col) ? 'active' : ''}
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
        {/*{this.state.modalOpen ? <Modal/> : null}*/}
        {this.state.modalOpen &&
        <Modal
          toggleModal={this.toggleModal}
          inputChange={this.inputChange}
          save={this.save}
          delete={this.delete}
          modal={this.state.modal}
        />}

      </div>
    );
  }
}


export default App;
