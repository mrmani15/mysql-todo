const router = require("express").Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

router.get("/api/get-todos", getAllTodos);

router.post("/api/create-todo", createTodo);

router.put("/api/update-todo/:id", updateTodo);

router.delete("/api/delete-todo/:id", deleteTodo);

module.exports = router;
