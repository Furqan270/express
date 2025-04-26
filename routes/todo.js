const todoRoute = require('express').Router();
todoRoute.get('/todos', (req, res) => {
    res.send('page todos')
})
module.exports = todoRoute;