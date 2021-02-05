import axios from "axios";


export const getTodos = async () => {
    const res = await axios.get("http://localhost:9999/todos");
    return res.data.todos;
};



export const addTodo = async (todo) => {
    const res = await axios.post("http://localhost:9999/todos",{todo});
    return res.data.message;
  };



export const editTodo = async (todo) => {
    const res = await axios.patch("http://localhost:9999/todos",{todo});
    return res.data.message;
  };