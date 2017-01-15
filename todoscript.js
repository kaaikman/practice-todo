// todolist object

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('Todos: ', this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
  },
  removeTodo: function(todoIndex) {
    this.todos.splice(todoIndex, 1);
  },
  editTodo: function(todoIndex, todoEdit) {
    this.todos[todoIndex] = todoEdit;
  }
};
