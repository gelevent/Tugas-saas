import { Todo } from './todo';

const todos = [];

// Add a new todo
const addTodo = (title) => {
    const todo = new Todo(title);
    todos.push(todo);
    render();
};

// Render todos
const render = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
      ${todo.completed ? `<s>${todo.title}</s>` : todo.title}
      <button onclick="toggleTodo(${index})">Toggle</button>
      <button onclick="removeTodo(${index})">Remove</button>
    `;
        todoList.appendChild(todoItem);
    });
};

// Toggle todo
const toggleTodo = (index) => {
    todos[index].toggle();
    render();
};

// Remove todo
const removeTodo = (index) => {
    todos.splice(index, 1);
    render();
};

// Event listener for adding a new todo
document.getElementById('add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.elements['todo-title'].value;
    addTodo(title);
    e.target.elements['todo-title'].value = '';
});

render();
