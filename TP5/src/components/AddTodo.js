import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addTodo from "../redux/actions/addTodo";
import editTodo from "../redux/actions/editTodo";

export default function AddTodo({itemID}) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((data) => data);

  const handleSubmit = (e) => {
    e.preventDefault();
    !itemID ?  dispatch(addTodo(todo)) : dispatch(editTodo(itemID,todo));
    setTodo("");
  };
  console.log(data);

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <div className="group-form">
          <label>New todo</label>
          <div className="d-flex justify-content-between flex-row">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              style={{ border: "none", borderBottom: "1px solid #ccc" }}
              placeholder="add new todo"
              type="text"
              className="form-control mr-4"
            />
            <button type="submit" className="btn btn-dark">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
