import Todo from '../models/Todo';

// Get all todos -- ADMIN ONLY
exports.getAllTodos = (req, res) => {
    Todo.find((err, todos) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(todos);
    });
}

// Get one todo -- ADMIN ONLY
exports.getOneTodo = (req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(todo);
    });
}

// Create a new todo -- ADMIN ONLY
exports.createTodo = (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save((err, savedTodo) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedTodo);
    });
}

// Update a todo -- ADMIN ONLY
exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId },
        req.body,
        { new: true },
        (err, updatedTodo) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(updatedTodo);
        }
    );
}

// Delete a todo -- ADMIN ONLY
exports.deleteTodo = (req, res) => {
    Todo.findOneAndDelete({ _id: req.params.todoId }, (err, deletedTodo) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(`Successfully deleted todo ${deletedTodo.title} from the database.`);
    });
}

// Get all todos by user
exports.getAllTodosByUser = (req, res) => {
    Todo.find({ user: req.params.userId }, (err, todos) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(todos);
    });
}

// Get one todo by user
exports.getOneTodoByUser = (req, res) => {
    Todo.findOne({ user: req.params.userId, _id: req.params.todoId }, (err, todo) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(todo);
    });
}

// Update a todo by user
exports.updateTodoByUser = (req, res) => {
    Todo.findOneAndUpdate(
        { user: req.params.userId, _id: req.params.todoId },
        req.body,
        { new: true },
        (err, updatedTodo) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(updatedTodo);
        }
    );
}

// Delete a todo by user
exports.deleteTodoByUser = (req, res) => {
    Todo.findOneAndDelete({ user: req.params.userId, _id: req.params.todoId }, (err, deletedTodo) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(`Successfully deleted todo ${deletedTodo.title} from the database.`);
    });
}