// todolist object

var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Your Todo List is empty!')
    }
    else {
      for(i=0; i<this.todos.length; i++) {
        console.log(this.todos[i].todoText);
        if(this.todos[i].todoIsComplete === false) {
          console.log('Incomplete');
        }
        else if(this.todos[i].todoIsComplete === true) {
          console.log('Complete');
        }
      }
    }
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
