import React, {Component} from 'react';
import {connect} from "react-redux";
import {removeTodo, toggleTodoStatus} from "../store/actions";
import PropTypes from "prop-types";

class ToDoList extends Component {
  static propTypes: {
    removeTodo: PropTypes.func,
    toggleTodoStatus: PropTypes.func,
    todoList: PropTypes.array,
  }

  remove = (id) => {
    this.props.removeTodo(id);
  }

  done = (id) => {
    this.props.toggleTodoStatus(id);
  }

  render() {
    const {todoList} = this.props;
    return (
      <table>
        <thead>
        <tr>
          <th>Todo</th>
          <th>action</th>
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
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = {
  removeTodo,
  toggleTodoStatus,
}

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export default ToDoListContainer;


