const express = require('express');
const todoRouter = express.Router();
const { getAllTodosByUser, createTodoByUser, updateTodoByUser, deleteTodoByUser } = require('../controllers/todoController');

todoRouter.route('/:userId')
    .get(getAllTodosByUser)
    .post(createTodoByUser);

todoRouter.route('/:userId/:todoId')
    .put(updateTodoByUser)
    .delete(deleteTodoByUser);

module.exports = todoRouter;