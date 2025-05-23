const todoRoute = require('express').Router();
const TodoController = require('../controllers/TodoController')

todoRoute.get('/', TodoController.getTodos)
todoRoute.get('/add', TodoController.addTodos)

module.exports = todoRoute;