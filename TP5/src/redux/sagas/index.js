import { all } from "redux-saga/effects";
import todoSaga from "./todoSaga";
import addTodoSaga from "./addTodoSaga";
import editTodoSaga from "./editTodoSaga";

export default function* rootSaga() {
  yield all([todoSaga(), addTodoSaga(), editTodoSaga()]);
}
