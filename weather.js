const weatherData = {
  "Maharashtra": { temp: 30, condition: "Sunny" },
  "Karnataka": { temp: 28, condition: "Cloudy" },
  "Tamil Nadu": { temp: 33, condition: "Hot" },
  "Delhi": { temp: 25, condition: "Cool and Breezy" },
  "Gujarat": { temp: 32, condition: "Dry and Sunny" }
};

let state = {
  currentState: "Delhi"
  
};

function weatherReducer() {
  return {
    getWeather: function (state, action) {
      let data = weatherData[action.state];
      return data
        ? `Weather in ${action.state}: ${data.temp}°C, ${data.condition}`
        : `Sorry, weather data for "${action.state}" is not available.`;
    }
  };
}

let res = weatherReducer();

let maharashtraWeather = res.getWeather(state, { state: "Maharashtra" });
let delhiWeather = res.getWeather(state, { state: "Delhi" });
let unknownWeather = res.getWeather(state, { state: "Punjab" });


console.log(maharashtraWeather);
console.log(delhiWeather);
console.log(unknownWeather);
