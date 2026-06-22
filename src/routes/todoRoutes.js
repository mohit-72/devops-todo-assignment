const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo Management APIs
 */

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a Todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
router.post("/", authMiddleware, createTodo);

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all Todos
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of todos
 */
router.get("/", authMiddleware, getTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update Todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo updated successfully
 */
router.put("/:id", authMiddleware, updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete Todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 */
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;