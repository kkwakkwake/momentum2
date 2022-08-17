const loginForm = document.getElementById('login-form');
const loginInput = document.getElementById('login-input');
const greeting = document.getElementById('greeting');
const me = document.querySelector('.me');

function handleLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add('hidden');
  const username = loginInput.value;
  localStorage.setItem('USERNAME', username);
  paintGreeting(username);
}


function paintGreeting(user) {
  const date = new Date();
  const hour = date.getHours();
  let message = 'hello';

  if (0 <= hour && hour <= 12) {
    message = 'Good Morning';
  } else if (12 < hour && hour <= 18) {
    message = 'Good Afternoon';
  } else {
    message = 'Good Evening'
  }

  greeting.innerText = `${message}, ${user}.`;
  greeting.classList.remove('hidden');
  me.classList.remove('hidden');
}


const savedUsername = localStorage.getItem('USERNAME');
//로컬에 유저 없을 때
if (savedUsername === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  //유저있을 때
  paintGreeting(savedUsername);
}
