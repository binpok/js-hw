 // Load todos from local storage
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoList = document.getElementById('todoList');
  const todoInput = document.getElementById('todoInput');

  // Initialize todo list with stored todos
  storedTodos.forEach((todo) => {
    addTodoElement(todo);
  });

  // Function to add a new todo
  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todo = { text: todoText, completed: false };
      storedTodos.push(todo);
      localStorage.setItem('todos', JSON.stringify(storedTodos));
      addTodoElement(todo);
      todoInput.value = '';
    }
  }

  // Function to add a todo element to the list
  function addTodoElement(todo) {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.style.textDecoration = todo.completed ? 'line-through' : 'none';
    li.addEventListener('click', () => toggleTodoCompletion(todo));

    todoList.appendChild(li);
  }

  // Function to toggle todo completion
  function toggleTodoCompletion(todo) {
    todo.completed = !todo.completed;
    localStorage.setItem('todos', JSON.stringify(storedTodos));
    refreshTodoList();
  }

  // Function to refresh the todo list
  function refreshTodoList() {
    // Clear the current list
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }

    // Re-populate the list with updated todos
    storedTodos.forEach((todo) => {
      addTodoElement(todo);
    });
  }
