const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('Hello World!')
})

route.get('/todos', (req, res) => {
    res.send('page todos')
})
route.get('/items', (req, res) => {
    res.send('page items    ')
})

module.exports = route