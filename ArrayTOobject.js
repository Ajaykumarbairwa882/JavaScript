// Array to object thorugh

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const odd = arr.filter((x) => x % 2 != 0);
// const even = arr.filter((x) => x % 2 == 0);
// const obj={
//     odd,
//     even
// }
// console.log(obj)

// by forEach

// const obj={
//     odd:[],
//     even:[]
// }
//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  arr.forEach(x=>x%2==0?(obj.even=[...obj.even,x]):(obj.odd=[...obj.odd,x]))
//  console.log(obj)

// const result = [23, 56, 78, 54, 23, 34, 44];
// const data = result.reduce((Obj, x) => {
//   x > 50
//     ? (Obj["pass"] = Obj["pass"] ? [...Obj["pass"], x] : [])
//     : (Obj["fail"] = Obj["fail"] ? [...Obj["fail"], x] : []);
//   return Obj;
// }, {});
// console.log(data);

let obj = {};

const data = [
  "apple",
  "art",
  "avan",
  "banana",
  "briyani",
  "byunika",
  "avocardo", 
  "bluebarry",
  "cat",
  "cutie",
];

data.forEach((name) => {
  obj[name[0].toLowerCase()] = obj[name[0].toLowerCase()]
    ? [...obj[name[0].toLowerCase()], name]
    : [name];
});
console.log(obj);

//  data.reduce((acc, item) => {
//   const first = item[0];
//   if (acc[first]) acc[first].push(item);
//   return acc;
// }, obj);

// console.log(obj);
