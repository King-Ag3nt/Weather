var apiKey = "66e3888a09534bc5bba121606241706";
var SearchInput = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
var daysOfWeek = [];
async function getWeatherNow() {
  var response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=66e3888a09534bc5bba121606241706&q=Cairo &days=3"
  );

  var data = await response.json();

  for (var i = 0; i < data.forecast.forecastday.length; i++) {
    var date = new Date(data.forecast.forecastday[i].date)
      .toString()
      .split(" ");
    var dayOfWeek = date[0];
    daysOfWeek.push(dayOfWeek);
  }

  var stringdate = new Date(data.location.localtime).toString().split(" ");

  function ShowData() {
    function showdate() {
      var daysOfWeek = [];
      for (var i = 0; i < data.forecast.forecastday.length; i++) {
        var date = new Date(data.forecast.forecastday[i].date)
          .toString()
          .split(" ");

        var dayOfWeek = date[0];
        daysOfWeek.push(dayOfWeek);
      }
      if (daysOfWeek[0] == "Sun") {
        document.getElementById("today").innerHTML = "Sunday";
      } else if (daysOfWeek[0] == "Mon") {
        document.getElementById("today").innerHTML = "Monday";
      } else if (daysOfWeek[0] == "Tue") {
        document.getElementById("today").innerHTML = "Tuesday";
      } else if (daysOfWeek[0] == "Wed") {
        document.getElementById("today").innerHTML = "Wednesday";
      } else if (daysOfWeek[0] == "Thu") {
        document.getElementById("today").innerHTML = "Thursday";
      } else if (daysOfWeek[0] == "Fri") {
        document.getElementById("today").innerHTML = "Friday";
      } else if (daysOfWeek[0] == "Sat") {
        document.getElementById("today").innerHTML = "Saturday";
      } else {
        document.getElementById("today").innerHTML = "Error";
      }
      if (daysOfWeek[1] == "Sun") {
        document.getElementById("fristDay").innerHTML = "Sunday";
      } else if (daysOfWeek[1] == "Mon") {
        document.getElementById("fristDay").innerHTML = "Monday";
      } else if (daysOfWeek[1] == "Tue") {
        document.getElementById("fristDay").innerHTML = "Tuesday";
      } else if (daysOfWeek[1] == "Wed") {
        document.getElementById("fristDay").innerHTML = "Wednesday";
      } else if (daysOfWeek[1] == "Thu") {
        document.getElementById("fristDay").innerHTML = "Thursday";
      } else if (daysOfWeek[1] == "Fri") {
        document.getElementById("fristDay").innerHTML = "Friday";
      } else if (daysOfWeek[1] == "Sat") {
        document.getElementById("fristDay").innerHTML = "Saturday";
      } else {
        document.getElementById("fristDay").innerHTML = "Error";
      }
      if (daysOfWeek[2] == "Sun") {
        document.getElementById("secondDay").innerHTML = "Sunday";
      } else if (daysOfWeek[2] == "Mon") {
        document.getElementById("secondDay").innerHTML = "Monday";
      } else if (daysOfWeek[2] == "Tue") {
        document.getElementById("secondDay").innerHTML = "Tuesday";
      } else if (daysOfWeek[2] == "Wed") {
        document.getElementById("secondDay").innerHTML = "Wednesday";
      } else if (daysOfWeek[2] == "Thu") {
        document.getElementById("secondDay").innerHTML = "Thursday";
      } else if (daysOfWeek[2] == "Fri") {
        document.getElementById("secondDay").innerHTML = "Friday";
      } else if (daysOfWeek[2] == "Sat") {
        document.getElementById("secondDay").innerHTML = "Saturday";
      } else {
        document.getElementById("secondDay").innerHTML = "Error";
      }
    }
    showdate();
    document.getElementById("todayDate").innerHTML =
      stringdate[1] + " " + stringdate[2];

    document.getElementById("mainCity").innerHTML = data.location.name;
    document.getElementById("nowTemp").innerHTML = data.current.temp_c + "°C";
    document.getElementById("fristIcon").src = data.current.condition.icon;
    document.getElementById("weatherStatus").innerHTML =
      data.current.condition.text;
    document.getElementById("humidity").innerHTML = data.current.humidity + "%";
    document.getElementById("windSpeed").innerHTML =
      data.current.wind_kph + "km/h";
    document.getElementById("windDir").innerHTML = data.current.wind_dir;
    if (data.current.wind_dir == "N") {
      document.getElementById("windDir").innerHTML = "North";
      document.getElementById("windDirCompass").style.transform =
        "rotate(0deg)";
    } else if (data.current.wind_dir == "E") {
      document.getElementById("windDir").innerHTML = "East";
      document.getElementById("windDirCompass").style.transform =
        "rotate(90deg)";
    } else if (data.current.wind_dir == "S") {
      document.getElementById("windDir").innerHTML = "South";
      document.getElementById("windDirCompass").style.transform =
        "rotate(180deg)";
    } else if (data.current.wind_dir == "W") {
      document.getElementById("windDir").innerHTML = "West";
      document.getElementById("windDirCompass").style.transform =
        "rotate(270deg)";
    } else {
      document.getElementById("windDir").innerHTML = data.current.wind_dir;
    }

    document.getElementById("highTempFrist").innerHTML =
      data.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.getElementById("lowTempFrist").innerHTML =
      data.forecast.forecastday[1].day.mintemp_c + "°C";
    document.getElementById("highTempSecond").innerHTML =
      data.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.getElementById("lowTempSecond").innerHTML =
      data.forecast.forecastday[2].day.mintemp_c + "°C";
    document.getElementById("secondIcon").src =
      data.forecast.forecastday[1].day.condition.icon;
    document.getElementById("thirdIcon").src =
      data.forecast.forecastday[2].day.condition.icon;
    document.getElementById("weatherStatusFrist").innerHTML =
      data.forecast.forecastday[1].day.condition.text;
    document.getElementById("weatherStatusSecond").innerHTML =
      data.forecast.forecastday[2].day.condition.text;
  }
  ShowData();
}

getWeatherNow();

SearchInput.addEventListener("keyup", function SearchWeather() {
  var location = SearchInput.value;
  var locationTest = /^\w{3,}(?:\s+\w{3,})?$/;
  if (locationTest.test(location)) {
    async function getWeatherAll() {
      var searchResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
      );
      var data = await searchResponse.json();
      console.log(data);

      var date = new Date(data.location.localtime).toString().split(" ");
      // console.log(date);
      function ShowData() {
        document.getElementById("todayDate").innerHTML =
          date[1] + " " + date[2];
        document.getElementById("mainCity").innerHTML = data.location.name;
        document.getElementById("nowTemp").innerHTML =
          data.current.temp_c + "°C";
        document.getElementById("fristIcon").src = data.current.condition.icon;
        document.getElementById("weatherStatus").innerHTML =
          data.current.condition.text;
        document.getElementById("humidity").innerHTML =
          data.current.humidity + "%";
        document.getElementById("windSpeed").innerHTML =
          data.current.wind_kph + "km/h";
        document.getElementById("windDir").innerHTML = data.current.wind_dir;
        if (data.current.wind_dir == "N") {
          document.getElementById("windDir").innerHTML = "North";
          document.getElementById("windDirCompass").style.transform =
            "rotate(0deg)";
        } else if (data.current.wind_dir == "E") {
          document.getElementById("windDir").innerHTML = "East";
          document.getElementById("windDirCompass").style.transform =
            "rotate(90deg)";
        } else if (data.current.wind_dir == "S") {
          document.getElementById("windDir").innerHTML = "South";
          document.getElementById("windDirCompass").style.transform =
            "rotate(180deg)";
        } else if (data.current.wind_dir == "W") {
          document.getElementById("windDir").innerHTML = "West";
          document.getElementById("windDirCompass").style.transform =
            "rotate(270deg)";
        } else {
          document.getElementById("windDir").innerHTML = data.current.wind_dir;
        }
        document.getElementById("highTempFrist").innerHTML =
          data.forecast.forecastday[1].day.maxtemp_c + "°C";
        document.getElementById("lowTempFrist").innerHTML =
          data.forecast.forecastday[1].day.mintemp_c + "°C";
        document.getElementById("highTempSecond").innerHTML =
          data.forecast.forecastday[2].day.maxtemp_c + "°C";
        document.getElementById("lowTempSecond").innerHTML =
          data.forecast.forecastday[2].day.mintemp_c + "°C";
        document.getElementById("secondIcon").src =
          data.forecast.forecastday[1].day.condition.icon;
        document.getElementById("thirdIcon").src =
          data.forecast.forecastday[2].day.condition.icon;
        document.getElementById("weatherStatusFrist").innerHTML =
          data.forecast.forecastday[1].day.condition.text;
        document.getElementById("weatherStatusSecond").innerHTML =
          data.forecast.forecastday[2].day.condition.text;

        function showdate() {
          var daysOfWeek = [];
          for (var i = 0; i < data.forecast.forecastday.length; i++) {
            var date = new Date(data.forecast.forecastday[i].date)
              .toString()
              .split(" ");

            var dayOfWeek = date[0];
            daysOfWeek.push(dayOfWeek);

            // console.log(date);
          }
          if (daysOfWeek[0] == "Sun") {
            document.getElementById("today").innerHTML = "Sunday";
          } else if (daysOfWeek[0] == "Mon") {
            document.getElementById("today").innerHTML = "Monday";
          } else if (daysOfWeek[0] == "Tue") {
            document.getElementById("today").innerHTML = "Tuesday";
          } else if (daysOfWeek[0] == "Wed") {
            document.getElementById("today").innerHTML = "Wednesday";
          } else if (daysOfWeek[0] == "Thu") {
            document.getElementById("today").innerHTML = "Thursday";
          } else if (daysOfWeek[0] == "Fri") {
            document.getElementById("today").innerHTML = "Friday";
          } else if (daysOfWeek[0] == "Sat") {
            document.getElementById("today").innerHTML = "Saturday";
          } else {
            document.getElementById("today").innerHTML = "Error";
          }
          if (daysOfWeek[1] == "Sun") {
            document.getElementById("fristDay").innerHTML = "Sunday";
          } else if (daysOfWeek[1] == "Mon") {
            document.getElementById("fristDay").innerHTML = "Monday";
          } else if (daysOfWeek[1] == "Tue") {
            document.getElementById("fristDay").innerHTML = "Tuesday";
          } else if (daysOfWeek[1] == "Wed") {
            document.getElementById("fristDay").innerHTML = "Wednesday";
          } else if (daysOfWeek[1] == "Thu") {
            document.getElementById("fristDay").innerHTML = "Thursday";
          } else if (daysOfWeek[1] == "Fri") {
            document.getElementById("fristDay").innerHTML = "Friday";
          } else if (daysOfWeek[1] == "Sat") {
            document.getElementById("fristDay").innerHTML = "Saturday";
          } else {
            document.getElementById("fristDay").innerHTML = "Error";
          }
          if (daysOfWeek[2] == "Sun") {
            document.getElementById("secondDay").innerHTML = "Sunday";
          } else if (daysOfWeek[2] == "Mon") {
            document.getElementById("secondDay").innerHTML = "Monday";
          } else if (daysOfWeek[2] == "Tue") {
            document.getElementById("secondDay").innerHTML = "Tuesday";
          } else if (daysOfWeek[2] == "Wed") {
            document.getElementById("secondDay").innerHTML = "Wednesday";
          } else if (daysOfWeek[2] == "Thu") {
            document.getElementById("secondDay").innerHTML = "Thursday";
          } else if (daysOfWeek[2] == "Fri") {
            document.getElementById("secondDay").innerHTML = "Friday";
          } else if (daysOfWeek[2] == "Sat") {
            document.getElementById("secondDay").innerHTML = "Saturday";
          } else {
            document.getElementById("secondDay").innerHTML = "Error";
          }
        }
        showdate();
      }

      ShowData();
    }

    getWeatherAll();
    searchBtn.addEventListener("click", function btnSearch() {
      SearchInput.value = "";
    });
  } else {
    console.log(SearchInput.value);
  }
});
