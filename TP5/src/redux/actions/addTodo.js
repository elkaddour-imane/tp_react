import * as type from "../constants/actionTypes";


export default  function addTodo(todo) {
    return {
        type : type.ADD_TODO,
        payload : todo
    }
}