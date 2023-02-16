const express = require('express');
const todoRouter = express.Router();
const { getTodosByUser, createTodoByUser, updateTodoByUser, deleteTodoByUser } = require('../controllers/todoController');

todoRouter.route('/:userId')
    .get(getTodosByUser)
    .post(createTodoByUser);

todoRouter.route('/:userId/:todoId')
    .put(updateTodoByUser)
    .delete(deleteTodoByUser);

module.exports = todoRouter;