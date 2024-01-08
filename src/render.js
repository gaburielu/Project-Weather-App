const { format, parseISO } = require("date-fns");
import { forecastData, fetchForecastData } from "./api.js";

const countryHeader = document.getElementById("countryHead");
const cityHeader = document.getElementById("cityHead");

const windSpeed = document.getElementById("wind-speed");
const chanceOfRain = document.getElementById("chance-of-rain");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const date = document.getElementById("date");

const forecastContainer = document.getElementById("forecast");

export async function render(location) {
  await fetchForecastData(location);

  if (forecastData.error) {
    cityHeader.textContent = "Invalid location";
    countryHeader.textContent = "Try again?";
  } else {
    renderCurrentForecast();
    renderWeekForecast();
  }
}

function renderCurrentForecast() {
  cityHeader.textContent = forecastData.location.name;
  countryHeader.textContent = forecastData.location.country;
  windSpeed.textContent = `Wind Speed: ${forecastData.current.wind_kph} km/h`;
  chanceOfRain.textContent = `Chances of Rain: ${forecastData.forecast.forecastday[0].day.daily_chance_of_rain} %`;
  humidity.textContent = `Humidity: ${forecastData.current.humidity} %`;
  temperature.textContent = `${forecastData.current.temp_c} °C`;
  conditions.textContent = `${forecastData.current.condition.text}`;

  const inputDate = forecastData.forecast.forecastday[0].date;
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, "dd MMM yy EEEE");
  date.textContent = formattedDate;
}

function renderWeekForecast() {
  forecastContainer.textContent = "";
  for (let i = 1; i <= 6; i++) {
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");

    const imgURL = forecastData.forecast.forecastday[i].day.condition.icon;
    const imgElement = document.createElement("img");
    imgElement.classList.add("icon");
    imgElement.src = imgURL;

    const day = document.createElement("div");
    const inputDate = forecastData.forecast.forecastday[i].date;
    const parsedDate = parseISO(inputDate);
    const formattedDate = format(parsedDate, "dd MMM EEEE");
    day.textContent = formattedDate;
    day.classList.add("date");
    day.id = "dayId";

    const rain = document.createElement("p");
    const rainForecast = `Chances of Rain: ${forecastData.forecast.forecastday[i].day.daily_chance_of_rain} %`;
    rain.textContent = rainForecast;
    rain.classList.add("rain");

    const condition = document.createElement("p");
    const conditionForecast = forecastData.forecast.forecastday[i].day.condition.text;
    condition.textContent = conditionForecast;
    condition.classList.add("condition");

    dateContainer.appendChild(imgElement);
    dateContainer.appendChild(day);
    dateContainer.appendChild(rain);
    dateContainer.appendChild(condition);

    forecastContainer.appendChild(dateContainer);
  }
}

// const imgURL = fetchedJsonData.current.condition.icon;
// const imgElement = document.createElement("img");
// imgElement.src = imgURL;
// test.appendChild(imgElement);
