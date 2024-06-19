var fristCard = document.getElementById("fristCard");
var secondCard = document.getElementById("secondCard");
var thirdCard = document.getElementById("thirdCard");
var searchInput = document.getElementById("search");
var currentData;
var cityDate;
var city = "Cairo";
var apiKey = "66e3888a09534bc5bba121606241706";
var daysOfWeek = [];

async function getWeather() {
  try {
    var response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data from API");
    }

    var data = await response.json();
    currentData = data;
    // console.log(currentData);
    getdate();
    showMainCard();
    showCards();
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}

getWeather();

function getdate() {
  daysOfWeek = [];
  for (var i = 0; i < currentData.forecast.forecastday.length; i++) {
    var date = new Date(currentData.forecast.forecastday[i].date)
      .toString()
      .split(" ");
    var dayOfWeek = date[0];
    daysOfWeek.push(dayOfWeek);
  }
  var stringdate = new Date(currentData.location.localtime)
    .toString()
    .split(" ");
  cityDate = stringdate;
  //   console.log(cityDate[1] + " " + cityDate[2]);
  // console.log(daysOfWeek);
}

function showMainCard() {
  document.getElementById("today").innerHTML = daysOfWeek[0];
  document.getElementById("todayDate").innerHTML =
    cityDate[1] + " " + cityDate[2];
  document.getElementById("mainCity").innerHTML = currentData.location.name;
  document.getElementById("nowTemp").innerHTML =
    currentData.current.temp_c + "°C";
  document.getElementById("fristIcon").src = currentData.current.condition.icon;
  document.getElementById("weatherStatus").innerHTML =
    currentData.current.condition.text;
  document.getElementById("humidity").innerHTML =
    currentData.current.humidity + "%";
  document.getElementById("windSpeed").innerHTML =
    currentData.current.wind_kph + "km/h";
  document.getElementById("windDir").innerHTML = currentData.current.wind_dir;
}
function showCards() {
  document.getElementById("fristDay").innerHTML = daysOfWeek[1];
  document.getElementById("secondDay").innerHTML = daysOfWeek[2];
  document.getElementById("secondIcon").src =
    currentData.forecast.forecastday[1].day.condition.icon;
  document.getElementById("thirdIcon").src =
    currentData.forecast.forecastday[2].day.condition.icon;
  document.getElementById("weatherStatusFrist").innerHTML =
    currentData.forecast.forecastday[1].day.condition.text;
  document.getElementById("weatherStatusSecond").innerHTML =
    currentData.forecast.forecastday[2].day.condition.text;
  document.getElementById("highTempFrist").innerHTML =
    currentData.forecast.forecastday[1].day.maxtemp_c + "°C";
  document.getElementById("lowTempFrist").innerHTML =
    currentData.forecast.forecastday[1].day.mintemp_c + "°C";
  document.getElementById("highTempSecond").innerHTML =
    currentData.forecast.forecastday[2].day.maxtemp_c + "°C";
  document.getElementById("lowTempSecond").innerHTML =
    currentData.forecast.forecastday[2].day.mintemp_c + "°C";
}

searchInput.addEventListener("keyup", function SearchWeather() {
  var rgx = /^\w{3,}(?:\s+\w)?$/;
  if (rgx.test(searchInput.value)) {
    city = searchInput.value;
    // console.log(city);
    getWeather();
  }
});
