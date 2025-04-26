const route = require('express').Router();
const todoRoute = require('./todo')
const TodoController = require('../controllers/TodoController')
todoRoute.get('/', TodoController.getTodos)
todoRoute.get('/add', TodoController.addTodos)


module.exports = route