import api from "./api.js";
const data = await api();
// console.log(data)

// const newarr = [...data].sort((a,b)=>a.reactions.likes-b.reactions.likes);
// console.log(newarr)


// let words = ["Apple", "banana", "cherry", "apple"];
// words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(words);



// let arr=[39,35,56,67]; // last number based sorting 
// arr.sort((a,b)=>(a%10)-(b%10));
// console.log(arr)


// let people = [
//   {name: "Ajay", salary: 50000, age: 25},
//   {name: "kunal", salary: 50000, age: 25},
//   {name: "jitu", salary: 50000, age: 25},
//   {name: "sushil", salary: 50000, age: 25}
// ];

// people.sort((a, b) => {
//   if (a.salary !== b.salary) return b.salary - a.salary;
//   if (a.age !== b.age) return a.age - b.age;
//   return a.name.localeCompare(b.name);
// });

// console.log(people);


// let maxLikePost = data.reduce((max, curr) =>
//   curr.reactions.likes > max.reactions.likes ? curr : max
// );
// console.log(maxLikePost);

let posts = [
  { id: 1, title: "Post A", createdAt: "2025-01-10" },
  { id: 2, title: "Post B", createdAt: "2025-12-27" },
  { id: 3, title: "Post C", createdAt: "2024-02-01" },
  { id: 4, title: "Post d", createdAt: "2024-02-01" }
];

// let today = new Date();

// let ans = posts.filter(x => {
//   let createdDate = new Date(x.createdAt);
//   let diffMs = createdDate-today;    
//   let diffDays = diffMs / (1000 * 60 * 60 * 24);
//   return diffDays >= 7;               
// });

// console.log(ans);


let data1 =[...posts].sort((a, b) =>{
  let date2=new Date(a.createdAt)
  let date3=new Date(b.createdAt)
  return date2==date3? a.id-b.id:date2-date3;
});

console.log(data1);



