import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getTodos from "../redux/actions/todos";
import AddTodo from "./AddTodo";

export default function TodosList() {

  const [item, setItem] = useState({});

  const dispatch = useDispatch();
  const todos = useSelector(({ todos: { todos } }) => todos);
  const loading = useSelector(({ todos: { loading } }) => loading);
  const error = useSelector(({ todos: { error } }) => error);

   
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="m-5">

     {/********** Add New Todo ************/}
     <AddTodo item={item}/>
     {/**********  Todo List ***********/}
      <h3>Todo List</h3>
      <hr />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul className="list-group list-group-flush">
          {todos &&
            todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item"
              >
                {todo.content}
                <small className="float-right">
                  <button
                    className="btn-done btn btn-default mr-2"
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button onClick={() => setItem({id:todo.id, content : todo.content})} className="btn btn-default mr-2">
                    <i className="fas fa-pen"></i>
                  </button>
                  <button className="btn btn-default ml-2">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </small>
              </li>
            ))}
          {!todos && !loading && <small>No Todos available !</small>}
          {error && !loading && <small>{error}</small>}
        </ul>
      )}
    </div>
  );
}
