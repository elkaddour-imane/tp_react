import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../constants/actionTypes";
import {getTodos} from "../../API/todoAPI"


function* fetchTodos() {
  try {
    const todos = yield call(getTodos);

    yield put({ type: type.GET_TODOS_SUCCESS, todos });
  } catch (err) {
    yield put({ type: type.GET_TODOS_FAILED, message: err.message });
  }
}

function* todoSaga() {
  yield takeEvery(type.GET_TODOS, fetchTodos);
}

export default todoSaga;
