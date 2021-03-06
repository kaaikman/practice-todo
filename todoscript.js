// todolist object

var todoList = {
  todos: [],
  removeButtons: function() {
    var removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'removeButton';
    return removeButton;
  },
  displayTodos: function() {
    this.listOfTodos = document.getElementById('listOfTodos');
    this.listOfTodos.innerHTML = '';
    if (this.todos.length === 0) {
      // return 'Your Todo List is empty!'
      document.getElementById('todoList').innerHTML = 'Your Todo List is empty!';
    }
    else {
      document.getElementById('todoList').innerHTML = '';
      for (i=0; i<this.todos.length; i++) {
        // document.getElementById('todoList').innerHTML = this.todos[i].todoText;
        var addingTodo = document.createElement('li');
        addingTodo.id = i;
        // addingTodo.textContent = this.todos[i].todoText;
        if (this.todos[i].todoIsComplete === false) {
          addingTodo.textContent = '(Incomplete) ' + this.todos[i].todoText;
        }
        else if (this.todos[i].todoIsComplete === true) {
          addingTodo.textContent = '(Complete) ' + this.todos[i].todoText;
        }
        addingTodo.appendChild(this.removeButtons());
        this.listOfTodos.appendChild(addingTodo);
      }
    }
    // document.getElementById('listOfTodos').addEventListener('click', function() {
    //   if (event.target.className === 'removeButton') {
    //     console.log(event.target.parentNode.id);
    //     console.log(todoList.todos.length);
    //     todoList.removeTodo(parseInt(event.target.parentNode.id));
    //     console.log(todoList.todos.length);
    //   }
    // });
  },
  addTodo: function(newTodo) {
    this.todos.push({
      todoText: newTodo,
      todoIsComplete: false
    });
  },
  removeTodo: function(todoIndex) {
    this.todos.splice(todoIndex, 1);
    this.displayTodos();
  },
  editTodo: function(todoIndex, todoEdit) {
    this.todos[todoIndex].todoText = todoEdit;
  },
  toggleTodoIsComplete: function(todoIndex) {
    this.todos[todoIndex].todoIsComplete = !this.todos[todoIndex].todoIsComplete;
  },
  toggleAllTodoIsComplete: function() {
    var isCompleteCount = 0;
    for (i=0; i<this.todos.length; i++) {
      if (this.todos[i].todoIsComplete === true) {
        isCompleteCount++;
      }
    }
    // or just an if else
    switch (isCompleteCount === this.todos.length) {
      // if all are true, set all false
      case true:
        for (i=0; i<this.todos.length; i++) {
          this.todos[i].todoIsComplete = false;
        }
        break;
      // if 1 or more is false, set all true
      case false:
        for (i=0; i<this.todos.length; i++) {
          this.todos[i].todoIsComplete = true;
        }
        break;
    }
    todoList.displayTodos();
  }
};

// button functions

// var btnDisplayTodos = document.getElementById('btnDisplayTodos').addEventListener('click', function() {todoList.displayTodos()});
var btnToggleAllTodoIsComplete = document.getElementById('btnToggleAllTodoIsComplete').addEventListener('click', function() {todoList.toggleAllTodoIsComplete()});

var btnAddTodo = document.getElementById('btnAddTodo').addEventListener('click', function() {
  var todoToAdd = document.getElementById('inputAddTodo');
  todoList.addTodo(todoToAdd.value);
  todoToAdd.value = '';
  todoList.displayTodos();
});

var removing = document.getElementById('listOfTodos');
  removing.addEventListener('click', function() {
    if (event.target.className === 'removeButton') {
      todoList.removeTodo(parseInt(event.target.parentNode.id));
    }
  });
