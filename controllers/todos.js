const todoTable = require("../models").crud;

const getAllTodos = async (req, res) => {
  try {
    let data = await todoTable.findAll();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, data: [] });
  }
};

const createTodo = async (req, res) => {
  try {
    let body = req.body;
    await todoTable.create(body);

    return res.status(200).json({ success: true, message: "todo created..." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "todo creation failed" });
  }
};

const updateTodo = async (req, res) => {
  try {
    let todoId = req.params.id;

    let todo = await todoTable.findOne({
      where: {
        id: todoId,
      },
    });

    if (!todo)
      return res
        .status(404)
        .json({ success: false, message: "todo not exist.." });

    await todoTable.update(
      { todo: req.body.todo },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.status(200).json({ success: true, message: "todo updated.." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "todo updation failed" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    let todoId = req.params.id;

    let todo = await todoTable.findOne({
      where: {
        id: todoId,
      },
    });

    if (!todo)
      return res
        .status(404)
        .json({ success: false, message: "todo not exist.." });

    await todoTable.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({ success: true, message: "todo deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "todo deletion failed" });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
