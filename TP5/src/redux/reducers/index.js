import { combineReducers } from "redux";
import todos from "./todos";
import addTodo from "./addTodo";

const rootReducer = combineReducers({ todos, addTodo });

export default rootReducer;
