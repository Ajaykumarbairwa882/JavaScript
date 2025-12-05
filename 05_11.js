// const obj = {
//   name: "prajjal",
//   age: 15,
// };

// obj.newkey = "value";
// console.log(obj);

// const obj = {
//   name: "Prajjal",
//   age: 15,
// };
// newobj = { ...obj, newkey: "val" };
// console.log(newobj);

// let obj = {
//   city: "",
//   temp: 25,
// };
// obj.city = "Jaipur";
// console.log(obj);

// let city = "Jaipur";
// let obj = {
//   city: "",
//   temp: 42,
// };
// obj.city = city;
// console.log(obj);

// let obj1 = {
//   name: "Prajjal",
//   dob: "7/08/2005",
// };
// let obj = {
//   city: "",
//   temp: 42,
// };

// obj = { ...obj, ...obj1 };
// console.log(obj);

// let dept = "ECE";
// let sub = "analog";
// obj = {
//   ...obj,
//   department: dept,
//   subject: sub,
// };
// console.log(obj);

// const weatherData = {
//   delhi: { temp: 48, condition: "Sunny, schorching heat", humidity: 40 },
//   mumbai: { temp: 32, condition: "Humid, clear sky", humidity: 70 },
//   kolkata: { temp: 20, condition: "Cloudy", humidity: 78 },
//   bangalore: { temp: 30, condition: "Rainy", humidity: 60 },
//   chennai: { temp: 27, condition: "Hot", humidity: 60 },
// };

// let state = {
//   city: "",
//   msg: "hello",
// };

// function weatherReducer(state, action) {
//   const cityKey = action.city?.toLowerCase(); //optional chaining
//   const data = weatherData[cityKey];
//   return {
//     ...state,
//     city: action.city,
//     data,
//   };
// }
// let response = weatherReducer(state, { city: "Kolkata" });
// console.log(response);

// {
//   city: kolkata,
//   data: { temp: 20, condition: "Cloudy", humidity: 78 }
// }

// {
//   state: {
//     city:""
//   },
//   msg:"thank you"
// }