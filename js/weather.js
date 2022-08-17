const MY_API_KEY = `5249c8a8592e20dce5ab85aa6371ce8e`;

function onGeolocationOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  getCurrentWeather(lat, lng);
}

async function getCurrentWeather(lat, lng) {
  const loacation = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  const weather = document.getElementById('weather');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${MY_API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  loacation.innerText = `${data.name}`;
  temperature.innerText = `${data.main.temp}`;
  weather.innerText = `${data.weather[0].description}`;
}

function onGeolocationError() {
  alert("위치설정을 허용해주세요!");
}

navigator.geolocation.getCurrentPosition(onGeolocationOk, onGeolocationError);