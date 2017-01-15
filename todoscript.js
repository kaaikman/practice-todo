// todolist object

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('Todos: ', this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push({
      todoText: newTodo,
      todoIsComplete: false
    });
  },
  removeTodo: function(todoIndex) {
    this.todos.splice(todoIndex, 1);
  },
  editTodo: function(todoIndex, todoEdit) {
    this.todos[todoIndex].todoText = todoEdit;
  },
  toggleTodoIsComplete: function(todoIndex) {
    this.todos[todoIndex].todoIsComplete = !this.todos[todoIndex].todoIsComplete;
  }
};
