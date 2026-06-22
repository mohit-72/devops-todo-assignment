const Todo = require("../models/Todo");

// Create Todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      completed: false,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        userId: req.user.id,
      },
    });

    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    await todo.update({
      title: req.body.title,
      completed: req.body.completed,
    });

    res.status(200).json({
      message: "Todo updated successfully",
      todo,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    await todo.destroy();

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};