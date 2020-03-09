function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3b4744289b2b8ddb28df56950550cf14";
let city = "Ericeira";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ericeira&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
