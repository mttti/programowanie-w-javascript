const API_KEY = "f44eef0ba916c40deac3b3810745abaa";

const findCityButton = document.querySelector("#findCity");

async function getCityLocation(city) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
  );
  let cords = (await response.json())[0];
  let lat = cords.lat;
  let lon = cords.lon;

  getWeatherForCity(lat, lon);
}

async function getWeatherForCity(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`
  );

  let data = await response.json();
  let temp = data.main.temp;
  let humidity = data.main.humidity;
  let icon = data.weather[0].icon;
  console.log(icon);

  console.log(data);
}

function getIcon(id) {
  let iconSrc = `https://openweathermap.org/img/wn/${id}@2x.png`;
}

findCityButton.addEventListener("click", () => {
  let input = document.querySelector("#city");
  let city = input.value;

  getCityLocation(city);
});
