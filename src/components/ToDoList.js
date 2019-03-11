import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderBy, removeTodo, toggleTodoStatus} from "../store/actions";
import PropTypes from "prop-types";

class ToDoList extends Component {
  static propTypes: {
    removeTodo: PropTypes.func,
    toggleTodoStatus: PropTypes.func,
    todoList: PropTypes.array,
    orderBy: PropTypes.func,
  }

  remove = (id) => {
    this.props.removeTodo(id);
  }

  done = (id) => {
    this.props.toggleTodoStatus(id);
  }
  changeOrder = (type) => {
    this.props.orderBy(type)
  }

  render() {
    const {order} = this.props;
    let todoList = [...this.props.todoList];
    if (order.key) {
      todoList = todoList.sort((a, b) => {
        // const textA = a[order.key].toLowerCase();
        // const textB = b[order.key].toLowerCase();
        // let i = 0;
        // while (textA[i] && textA[i].charCodeAt() === textB[i].charCodeAt()) {
        //   i++;
        // }
        // return textA[i].charCodeAt() - textB[i].charCodeAt();
        if (a[order.key] < b[order.key]) {
          return -1;
        } else if (a[order.key] > b[order.key]) {
          return 1;
        }
        return 0;
      });
      if (order.type === 'desc') {
        todoList = todoList.reverse();
      }
    }
    return (
      <table border="1">
        <thead>
        <tr>
          <th onClick={() => this.changeOrder('text')}>
            Todo
          </th>
          <th onClick={() => this.changeOrder('done')}>
            Action
          </th>
          <th onClick={() => this.changeOrder('doneInterval')}>
            Time
          </th>
        </tr>
        </thead>
        <tbody>
        {todoList.map((r) => (
          <tr key={r.id}>
            <td>
              {r.done ? <del>{r.text}</del> : r.text}
            </td>
            <td>
              <button onClick={() => this.remove(r.id)}>-</button>
              <button onClick={() => this.done(r.id)}>+</button>
            </td>
            <td>{Math.round(r.doneInterval / 1000)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  order: state.order,
});

const mapDispatchToProps = {
  removeTodo,
  toggleTodoStatus,
  orderBy,
}

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export default ToDoListContainer;


