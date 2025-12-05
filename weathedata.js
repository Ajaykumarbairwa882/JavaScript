const weatherData = {
  Maharashtra: { temp: 30, condition: "Sunny", humadity: 80 },
  Karnataka: { temp: 28, condition: "Cloudy", humadity: 70 },
  tonk: { temp: 33, condition: "Hot", humadity: 60 },
  Delhi: { temp: 25, condition: "Cool and Breezy", humadity: 50 },
  Gujarat: { temp: 32, condition: "Dry and Sunny", humadity: 40 },
};
let state = {
   city: "",
};
function weatherReducer(state, action) {
      let citykey = action.city;
      let data = weatherData[citykey];
       Object.assign(state, { data: data },{ city: action.city });
        return state;
    }

let res = weatherReducer(state, { city: "Delhi" });
// console.log(res);
console.log(state);

