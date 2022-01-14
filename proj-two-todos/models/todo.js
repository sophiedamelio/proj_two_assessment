const todos = [];
// 'grocery shopping', 'pet dog', 'make dinner', 'eat dinner', 'sleep'

module.exports = {
    getAll,
    deleteOne, 
    getOne,
    create
}

function getAll() {
    return todos
}

function deleteOne(id) {
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
};

function getOne(id) {
    return todos.find((todo) => todo.id === parseInt(id));
}

function create(todo) {

    todo.id = Date.now() % 100000000;
    todo.done = false;
    todos.push(todo)
}