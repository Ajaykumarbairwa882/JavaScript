// let obj={
//     "first name":"ajay",
//     age:25
// }
// console.log(obj["first name"]);

// let obj={
//     name:"ajay",
//     age:25,
//     city:"pune"
// }
// const[name,age,city]=Object.entries(obj);
// console.log(name);
// console.log(age);
// console.log(city);
// console.log("giiiiii")

// let obj = {
//   name1: "ajay",
//   age: 25,
//   city: "pune",
//   "6+6": 12,
// };
// console.log(obj["6+6"]);

//multiple keys with values with help of fxn
// const createObject = (key1, value1, key2, value2) => ({
//   [key1]: value1,
//   [key2]: value2,
// });
// let result = createObject("name", "ajay", "age", 25);
// console.log(result);
// console.log(typeof result);

// 7-11-2025
//Object ki key value ko swap kena hai

// const obj2={
//   name:"ajay",
//   age:19,
//   city:"pune",
// }
// const swappedObj=Object.fromEntries( //  Object.fromEntries  =>> ye fxn array of arrays ko object me convert krta hai
//   Object.entries(obj2).map(([key,value])=>[value,key]) // Object.entries =>> ye fxn object ko array of arrays me convert krta hai
// );
// console.log(swappedObj); 

// const products=[
//   ["laptop",80000],
//   ["phone",78500],
//   ["tablet",70000],
// ]
// const productObj=Object.fromEntries(products);
// console.log(productObj);

// const fruits=["apple","july","banana"];
// const newarr=fruits.filter(m=>m.includes("a","e","i","o","u"));
// console.log(newarr);

// const arr=[[1,2],[3,4]]
// const newarr=arr.map(m=>m.reverse());
// console.log(newarr);

//  const obj={
//   name:"ajay",
//   age:25,
//   city:"pune",
// }
// const swappedObj=Object.fromEntries( //  Object.fromEntries  =>> ye fxn array of arrays ko object me convert krta hai
//   Object.entries(obj).map(m=>m.reverse()) // Object.entries =>> ye fxn object ko array of arrays me convert krta hai
// );
// console.log(swappedObj);

// =====================================================================================

// const obj = {
//   name: "ajay",
//   age: 50,
//   city: "pune",
// };
// const obj1 = {
//   name: "ajay",
//   age: 25,
//   city: "pune",
// };
// const swappedObj=Object.entries(obj).map(([key,value])=>[key,value])
// console.log(swappedObj)

// const arr=swappedObj.map(([key,value])=>{
//     if(key=="age" && obj.name===obj1.name){
//         return [key, value + obj1.age]
//     }
//     return[key,value]
// })
// console.log(arr);

// const obj={
//     laptop:70000,
//     mobile:5000,
//     tablet:2000
// }
//  const swappedObj1=Object.fromEntries(Object.entries(obj).map(([key,value])=>[key,value*0.2]))
// console.log(swappedObj1)

// const obj = {
//   name: "ajay",
//   age: 50,
//   city: "pune",
// };
// const obj1 = {
//   name: "ajay",
//   age: 25,
//   city: "pune",
// };
// const swappedObj=Object.entries(obj).map(([key,value])=>[key,value])
// console.log(swappedObj)

// const arr=swappedObj.map(([key,value])=>{
//     if(key=="age" && obj.name===obj1.name){
//         return [key, value + obj1.age]
//     }
//     return[key,value]
// })
// console.log(arr);
// const obj3=Object.fromEntries(arr)
// console.log(obj3)

// ******************************************************************************88

///first lettter capital

// const obj={
//     fullname:"ajay",
//     age:21,
//     loan:78000
// }

// let newarr=Object.entries(obj);
// let newobj=newarr.map(([key,value])=>[key[0].toUpperCase()+key[1].toUpperCase()+key.slice(2),value])
// let final=Object.fromEntries(newobj);
// console.log(final);

// const a={
//     name:"ajay",
//     age:21,
// }

// const key = Object.keys(a)[0];
// console.log(key);

// const newKey = key.charAt(0).toUpperCase() + key.slice(1);
// console.log(newKey);

// const updated = { [newKey]: a[key], ...a };

// console.log(updated);

// ----------------------------------------------------------------------------------

// object of array =>> map

// const obj = {
//   Names: ["prajjlal", "ajay", "kishan", "kushi", "pritam", "divya"],
//   age: [78, 85, 20, 45, 81, 42],
//   address: [
//     "Jaipur",
//     "Ajmer",
//     "Kotputli",
//     "Kishangarh",
//     "Rameshwaram",
//     "Chennai",
//   ],
// };

// let newobject={
//     name:obj.Names.map(m=>m[0].toUpperCase() + m.slice(1)),
//     Age:obj.age,
//     Address:obj.address.map(m=>m.toLowerCase())
// }
// console.log(newobject);

// ------------------------------------------------------------------------------------

// let newname=obj.Names;
// let newadd=obj.address;
// // console.log(newar);
// let newobj=newname.map(m=>m.toLowerCase());
// // console.log(newobj);
// let newobj1=newadd.map(m=>m.toLowerCase());
// // console.log(newobj1);

// let age=obj.age;

// let newobject={
//     newobj,
//     age,
//     newobj1
// }
// console.log(newobject);

const obj = {
  name: "ajay",
  age: 21,
};
const {name, age} = obj;// destructuring the object.
console.log(name);
console.log(age);
