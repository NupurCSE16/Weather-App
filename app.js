const API_KEY = "583ca183b338abf44024a9f1129f34be";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherInfo(city) {

    let response = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        let jsonResponse = await response.json();

        //console.log(jsonResponse);

        document.querySelector(".city").innerHTML = jsonResponse.name;
        document.querySelector(".temp").innerHTML = Math.round(jsonResponse.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = jsonResponse.main.humidity + "%";
        document.querySelector(".wind").innerHTML = jsonResponse.wind.speed + "km/h";

        if (jsonResponse.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (jsonResponse.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (jsonResponse.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (jsonResponse.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (jsonResponse.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    getWeatherInfo(searchBox.value);
});



