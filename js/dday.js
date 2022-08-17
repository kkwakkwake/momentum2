const ddayInput = document.getElementById('dday-input');
const ddayForm = document.getElementById('dday-form');
const ddayContainer = document.getElementById('dday-container');
const ddayTodo = document.getElementById('dday-todo');
const ddayList = document.getElementById('dday-list');

const toggleButton = document.getElementById('dday-toggle-button');

let ddayTodoArray = [];

function saveDday() {
  localStorage.setItem('MYDDAY', JSON.stringify(ddayTodoArray));
}

function removeDday(e) {
  const list = e.target.parentElement;
  list.remove();
  ddayTodoArray = ddayTodoArray.filter((item) => item.id !== parseInt(list.id));
  saveDday();
}

function paintDday(item) {
  const $li = document.createElement('li');
  const $spanText = document.createElement('span');
  const $spanDday = document.createElement('span');
  const $button = document.createElement('button');
  $li.id = item.id;
  $spanText.innerText = item.text;
  $spanDday.innerText = item.leftDay;
  $button.innerText = 'done';

  $button.addEventListener('click', removeDday);
  $li.appendChild($spanDday);
  $li.appendChild($spanText);
  $li.appendChild($button);
  ddayList.appendChild($li);
}

function handleDdaySubmit(ddayItem) {
  ddayTodoArray.unshift(ddayItem);
  ddayInput.value = '';
  ddayTodo.value = '';
  paintDday(ddayItem);
  saveDday();
}

function calculateRemain(e) {
  e.preventDefault();
  //날짜 계산
  const dday = new Date(ddayInput.value);
  const today = new Date();
  const diff = dday - today;

  const todo = ddayTodo.value;

  if (diff >= 0 && todo.length !== 0) {
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);


    const leftDay = `${diffDay}일 ${diffHour}시 ${diffMin}분`;
    const ddayItem = {
      text: todo,
      leftDay,
      id: Date.now(),
    };
    handleDdaySubmit(ddayItem);
  }
}

function handleToggleButton() {
  ddayContainer.classList.toggle('hidden');
}

ddayForm.addEventListener('submit', calculateRemain);
toggleButton.addEventListener('click', handleToggleButton);

const savedDday = localStorage.getItem('MYDDAY');
if (savedDday !== null) {
  const parsedDday = JSON.parse(savedDday);
  parsedDday.forEach(paintDday);
}
