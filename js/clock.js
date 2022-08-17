const clock = document.getElementById('clock');
const today = document.getElementById('today');

function getClock() {
  const date = new Date();
  //const today = date.toLocaleDateString().slice(0, 11);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dateday = date.getDate();
  const day = date.getDay();

  const time = `${year}-${month}-${dateday}`

  const hours24 = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  let midday;
  let hours12;

  if (hours24 == 12) {
    //정오일 때
    midday = 'PM';
    hours12 = hours24;
  } else if (parseInt(hours24 / 12)) {
    //오후일 때
    midday = 'PM';
    hours12 = hours24 % 12;
  } else {
    //오전일 때
    midday = 'AM';
    hours12 = hours24;
  }

  today.innerText = `${time}`;
  clock.innerText = `${hours12}:${minutes}:${seconds} ${midday}`;
}

getClock();
setInterval(getClock, 1000);
