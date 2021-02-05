const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todos = [
  { id: 1, content: "create new react app" },
  { id: 2, content: "setup redux & react redux" },
  { id: 3, content: "setup redux-devtools" },
  { id: 4, content: "setup redux-saga" },
];

app.get("/todos", async (req, res) => {
  try {
    todos && res.status(200).send({ todos });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { todo } = req.body;
    todos.push({ id: todos.length + 1, content: todo });
    res.status(201).send({ message: "Todo added sucessfuly!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.patch("/todos", async (req, res) => {
    try {
      const {id, todo } = req.body;
      console.log(id, todo);
  //    todos.push({ id: todos.length + 1, content: todo });
   //   res.status(201).send({ message: "Todo added sucessfuly!" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

app.listen(9999, () => console.log("Listening on 9999.."));
