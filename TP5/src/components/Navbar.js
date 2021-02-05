import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getTodos from "../redux/actions/todos";

export default function NavBar() {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand w-100">
          <small className="float-right">
            Todos of the day : <strong>{todos && todos.length}</strong>
          </small>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
