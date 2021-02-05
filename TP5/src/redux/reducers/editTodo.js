import * as type from "../constants/actionTypes";

export default function editTodo(state = false, action) {
    
  switch (action.type) {
    case type.EDIT_TODO:
      return true;
    case type.EDIT_TODO_SUCCESS :    
     return action.message;
     case type.EDIT_TODO_FAILED : 
     return false;
    default:
      return state;
  }
}
