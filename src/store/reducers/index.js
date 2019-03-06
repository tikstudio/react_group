import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS} from "../actions";

const initialState = {
  todoList: []
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO: {
      const id = state.todoList.length ?
        state.todoList.reverse()[0].id + 1 : 0;
      const data = {
        id: id,
        text: action.payload.text,
        done: false,
      }
      return {...state, todoList: [...state.todoList, data]}
    }
    case REMOVE_TODO: {
      const todoList = state.todoList.filter((r) => r.id !== action.payload.id);
      return {...state, todoList}
    }

    case TOGGLE_TODO_STATUS: {
      const todoList = state.todoList.map((r) => {
        if (action.payload.id === r.id) {
          r.done = !r.done;
        }
        return r;
      });
      return {...state, todoList}
    }

    default: {
      return state;
    }
  }
}

export default reducer;
