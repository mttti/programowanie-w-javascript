const API_KEY = "yourapikey";

const addCityButton = document.querySelector("#findCity");
const deleteInfoButton = document.querySelectorAll(".delete");

async function listCities() {
    for (let index = 0; index < localStorage.length; index++) {
        const cityInfo = JSON.parse(
            localStorage.getItem(localStorage.key(index))
        );
        await addCity(cityInfo.name);
        //addWeatherInfo(cityInfo);
    }
}

listCities();

async function getWeatherForCity(cityName) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    let data = await response.json();
    let date = new Date(data.dt * 1000);

    let hours =
        date.getHours().toString().length < 2
            ? 0 + date.getHours().toString()
            : date.getHours();

    let minutes =
        date.getMinutes().toString().length < 2
            ? 0 + date.getMinutes().toString()
            : date.getMinutes();

    let dateTime = `${hours}:${minutes}`;

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let iconId = data.weather[0].icon;
    let info = {
        name: cityName,
        temp: temp,
        humidity: humidity,
        iconId: iconId,
        time: dateTime,
    };

    return info;
}

function getIcon(id) {
    let iconSrc = `https://openweathermap.org/img/wn/${id}@2x.png`;
    return iconSrc;
}

async function addCityButtonHandler() {
    let input = document.querySelector("#city");
    let city = input.value;

    if (localStorage.getItem(city) !== null) {
        alert("To miasto zostało już dodane");
        return;
    }
    if (localStorage.length >= 10) {
        alert("Maksymalna liczba miast do śledzenia to 10!");
        input.disabled = true;
    }

    await addCity(city);
}

async function addCity(city) {
    try {
        let info = await getWeatherForCity(city);
        addWeatherInfo(info);
    } catch (error) {
        alert("Wystąpił błąd - sprawdź konsole");
        console.log(error);
    }
}

function addWeatherInfo(info) {
    const main = document.querySelector("#main");
    const newInfo = document.createElement("div");
    const url = getIcon(info.iconId);
    const cityName = info.name[0].toUpperCase() + info.name.slice(1);

    window.localStorage.setItem(cityName, JSON.stringify(info));

    const deleteButton = document.createElement("p");
    deleteButton.className = "delete";
    deleteButton.textContent = "Usuń";

    newInfo.className = "info";
    const infoInnerHtml = `
        <h1> ${cityName}</h1>
        <img src=${url}>
        <p> Temperatura: ${(info.temp - 273.15).toFixed(1)}C</p>
        <p>Wilgotność powietrza: ${info.humidity} </p>
        
        <p class="time">Godzina aktualizacji: ${info.time}</p>
        `;

    newInfo.innerHTML = infoInnerHtml;
    newInfo.appendChild(deleteButton);
    main.appendChild(newInfo);

    deleteButton.addEventListener("click", () => {
        newInfo.remove();
        localStorage.removeItem(cityName);
    });
}

addCityButton.addEventListener("click", addCityButtonHandler);

// deleteInfoButton.addEventListener("click", () => {
//     console.log("xf");
// });
