import * as type from "../constants/actionTypes";

const initState = {
  todos: [],
  loading : false,
  error : null
};

export default function todos(state = initState, action) {
  switch (action.type) {
    case type.GET_TODOS:
      return { ...state, loading :true };
    case type.GET_TODOS_SUCCESS : 
     return {...state, loading:false, todos:action.todos}
     case type.GET_TODOS_FAILED : 
     return {...state, loading:false, message :action.message}
    default:
      return state;
  }
}
