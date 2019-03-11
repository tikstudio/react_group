import {ADD_TODO, CHANGE_ORDER, REMOVE_TODO, TOGGLE_TODO_STATUS} from "../actions";

const initialState = {
  todoList: [],
  order: {key: '', type: ''}
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO: {
      const date = new Date()
      const data = {
        id: date.getTime() + '_' + Math.random(),
        text: action.payload.text,
        done: false,
        updateTime: (new Date()).getTime(),
        doneInterval: 0,
      };
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
          const now = (new Date()).getTime();
          if (r.done) {
            r.doneInterval = r.doneInterval + now - r.updateTime
          } else {
            r.updateTime = now;
          }
        }
        return r;
      });
      return {...state, todoList}
    }

    case CHANGE_ORDER: {
      let {key} = action.payload
      let {type} = state.order
      if(key === state.order.key){
        if (type === 'asc') {
          type = 'desc'
        } else if (type === 'desc') {
          key = '';
          type = '';
        } else {
          type = 'asc'
        }
      }else{
        type = 'asc'
      }

      return {...state, order: {key, type}}
    }

    default: {
      return state;
    }
  }
}

export default reducer;
