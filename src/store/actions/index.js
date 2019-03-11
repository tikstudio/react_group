export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';
export const CHANGE_ORDER = 'CHANGE_ORDER';

export function addTodo(text) {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
      dispatch(_addTodo(text, {latitude, longitude}));
    }, (error) => {
      dispatch(_addTodo(text, {latitude: null, longitude: null}));
    });
  }
}

export function _addTodo(text, cord) {
  return {
    type: ADD_TODO, payload: {text, cord}
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

export function orderBy(key) {
  return {
    type: CHANGE_ORDER, payload: {key}
  }
}
