function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let headingElement = document.querySelector("#weather");
  headingElement.innerHTML = `It is ${temperature} degrees in ${city}`;
}

let apiKey = "97e4tabb40o4f358e853d5ee1101046c";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
