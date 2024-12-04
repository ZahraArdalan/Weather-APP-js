const weatherform = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "d8b50e1bd81597851b127684019fb762";
weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getweatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      DisplayError(error);
    }
  } else {
    DisplayError("Please enter a city");
  }
});

async function getweatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(" Could not fetch weather data");
  }
  return await response.json();
}

function displayWeatherInfo(data) {}

function getweatherEmoji(weatherId) {}
function DisplayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
