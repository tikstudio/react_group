export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';

export function addTodo(text) {
  return {
    type: ADD_TODO, payload: {text}
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO, payload: {id}
  }
}

export function toggleTodoStatus(id) {
  return {
    type: TOGGLE_TODO_STATUS, payload: {id}
  }
}
