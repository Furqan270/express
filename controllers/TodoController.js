class TodoController {
    static getTodos(req, res) {
        res.send('page todos utama');
    }
    static addTodos(req, res) {
        res.send('page add todos');
    }
}

module.exports = TodoController;