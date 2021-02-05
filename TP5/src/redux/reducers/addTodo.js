import * as type from "../constants/actionTypes";

export default function addTodo(state = false, action) {
    
  switch (action.type) {
    case type.ADD_TODO:
      return true;
    case type.ADD_TODO_SUCCESS :    
     return action.message;
     case type.ADD_TODO_FAILED : 
     return false;
    default:
      return state;
  }
}
