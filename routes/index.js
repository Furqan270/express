const route = require('express').Router();
const todoRoutes = require('./todo')


route.get('/', (req, res) => {
    res.send('Hello page utama')
})

route.use('/todos', todoRoutes)


module.exports = route