import React from "react";
import TodosList from "./components/TodosList";
import NavBar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="container p-3">
      <NavBar />
      <TodosList />
    </div>
  );
}

export default App;
