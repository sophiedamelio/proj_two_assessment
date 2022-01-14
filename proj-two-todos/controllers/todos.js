const Todo = require("../models/todo");
// const Helpers = require("../models/todo");


module.exports = {
    index,
    delete: deleteTodo,
    create: createTodo
}




function index(req, res) {
    res.render("todos/index", {
        todos: Todo.getAll()
    });
}

function deleteTodo(req, res) {
    // console.log(req.params.id)
    // not getting the specific ID that was clicked on
    // currently deleting from top of list?
    Todo.deleteOne(req.params.id)
    res.redirect("/todos")
};

function createTodo(req, res, next) {
    // Todo.content = req.body;
    
    // Todo.create(req.body, function (err, todo) {
    //     todo.content = req.body
    //     console.log(todo.content)
    //     todo.save()
    //     res.redirect('/todos')
    // });
    // console.log(todos)
    Todo.create(req.body)
    res.redirect("/todos")
};



