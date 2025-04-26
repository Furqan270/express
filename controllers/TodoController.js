class TodoController {
    static getTodos(req, res) {
        const arrObjects = [
            { id: 1, title: 'Belajar NodeJS', status: 'done' },
            { id: 2, title: 'Belajar ExpressJS', status: 'on progress' },
            { id: 3, title: 'Belajar MongoDB', status: 'on progress' },
        ]
        res.send(arrObjects);
    }
    static addTodos(req, res) {
        res.json({
            message: 'Add Todos',
            data: {
                title: 'Belajar NodeJS',
                status: 'on progress'
            }
        })
    }
}

module.exports = TodoController;