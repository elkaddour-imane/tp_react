import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../constants/actionTypes";
import {addTodo, getTodos} from "../../API/todoAPI";


function* handlleAddTodo(action) {
  try {
    const message = yield call(addTodo, action.payload);
    
    const todos = yield call(getTodos); 
    yield put({ type: type.GET_TODOS_SUCCESS, todos });
  
    yield put({ type: type.ADD_TODO_SUCCESS, message });

   
  } catch (err) {
    yield put({ type: type.ADD_TODO_FAILED, message: err.message });
  }
}

function* addTodoSaga() {
  yield takeEvery(type.ADD_TODO, handlleAddTodo);
}

export default addTodoSaga;
