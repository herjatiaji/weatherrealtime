// variables
// Array
var newsDataArr = [];
let weather = {
    apiKey: "104ca9ffdd53f5ad89d60f8118ac6c0e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(data.main);
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");

  let timezone = {
    apiKey: "48835177643742f88187c63f2498f3b3",
    fetchTimezone: function (city) {
      fetch(
        "https://timezone.abstractapi.com/v1/current_time/?api_key=48835177643742f88187c63f2498f3b3&location=" + city

      )
        .then((response) => {
          if (!response.ok) {
            alert("No timezone found.");
            throw new Error("No timezone found.");
          }
          return response.json();
        })
        .then((data) => this.displayTimezone(data));
    },
    displayTimezone: function (data) {
      const jsonElement1 = document.getElementById("date");
      const jsonElement2 = document.getElementById("timezone");
      jsonElement1.innerText =data.datetime ;
      jsonElement2.innerText ="Timezone: " + data.timezone_name;
      // const { datetime } = data.datetime;
      // const { timezonename} = data.timezone_name;
      // console.log(data.datetime);
      // console.log(data.timezone_name);
      // document.querySelector(".date").innerHTML = datetime;
      // document.querySelector(".timezone").innerText = timezonename;
 
    },
    search: function () {
      this.fetchTimezone(document.querySelector(".search-bar").value);
    },
  };
  document.querySelector(".search button").addEventListener("click", function () {
    timezone.search();
  });
  document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      timezone.search();
    }
  });

timezone.fetchTimezone("Paris");

