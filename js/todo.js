const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.getElementById('todo-list');

const todoContainer = document.getElementById('todo-container');
const todoButton = document.getElementById('todo-button');
const todo = document.getElementById('todo');

let todoArray = [];

function saveTodo() {
  localStorage.setItem('MYTODO', JSON.stringify(todoArray));
}

function removeTodo(e) {
  const list = e.target.parentElement;
  list.remove();
  todoArray = todoArray.filter((todo) => todo.id !== parseInt(list.id));
  saveTodo();
  todo.innerText = `${todoArray.length} TO DO`;
}

function paintTodo(item) {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $button = document.createElement('button');
  $li.id = item.id;
  $span.innerText = item.text;
  $button.innerText = 'done';

  $button.addEventListener('click', removeTodo);
  $li.appendChild($span);
  $li.appendChild($button);
  todoList.appendChild($li);
  todo.innerText = `${todoArray.length} TO DO`;
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  if (todo.length !== 0) {
    const todoItem = {
      text: todo,
      id: Date.now(),
    };
    todoInput.value = '';
    todoArray.unshift(todoItem);
    paintTodo(todoItem);
    saveTodo();
  }
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodo = localStorage.getItem('MYTODO');

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  parsedTodo.forEach(paintTodo);
  todo.innerText = `${parsedTodo.length} TO DO`;
} else {
  todo.innerText = `${todoArray.length} TO DO`;
};

function toggleTodoButton() {
  todoContainer.classList.toggle('hidden');
}

todoButton.addEventListener('click', toggleTodoButton);