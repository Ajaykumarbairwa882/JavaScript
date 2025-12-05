const obj = {
  names: ["Prajjal", "Ajay", "Kishan", "Kushi", "Pritam", "Divya"],
  age: [78, 85, 20, 45, 81, 42],
  address: [
    "Jaipur",
    "Ajmer",
    "Kotputli",
    "Kishangarh",
    "Rameshwaram",
    "Chennai",
  ],
};

// 1.Display the first three employees’ names with their city.
// [
// [“Prajjal”,”Jaipur”]
// [“Ajay”,”Ajmer”]
// [“kishan”,”kotputli”]
// ]
// let firstthreename=obj.names.slice(0,3).map((name,i)=>[name,obj.address[i]]);
// console.log(firstthreename);

// 2.List the last three employees along with their ages.
// [
// [“Kushi”,45]
// [“Pritam”,”81”]
// [“Divya”,”42”]
// ]

// let lastthreeemployees=obj.names.slice(-3).map((names,age)=>[names,obj.age.slice(-3)[age]]);
// console.log(lastthreeemployees);

// 3.Show employees from index 1 to 4 with both name and address.

// let employees_from_index=obj.names.slice(1,5).map((name,i)=>[i+1,name, obj.address[i+1]])
// console.log(employees_from_index);

// 4.Create a list of the first two employee names in uppercase.

// let first2Uppercase=obj.names.slice(0,2).map(name=>name.toUpperCase())
// console.log(first2Uppercase);

// 5.Extract last four employees and display Name - Age years old.

// let last4employee = obj.names
//   .slice(-4)
//   .map((name, i) => `${name} , ${obj.age.slice(-4)[i]} year old`);
// console.log(last4employee);

// 6.Take employees from 0–3 and show Name-(Address) format.

// let first3name=obj.names.slice(0,3).map((name,i)=>[`${name}-${obj.address.slice(0,3)[i]}`])
// console.log(first3name);

// 7.Slice middle three employees and return greeting: Hi, Name from

// const middleThree = obj.names
//   .slice(1, 4)
//   .map((name, i) => `Hi, ${name} from ${obj.address[i + 1]}!`);
// console.log(middleThree);

// 8.Display employees over 40 years old (use slice to limit to first 5).

let _40saalkadudda =obj.age.slice(0, 5).map((age, i) => age > 40 ? obj.names[i] :'not found');
console.log(_40saalkadudda);``

// 9.From first three names, return each with serial number.
// let serialnum=obj.names.slice(0,3).map((name,i)=>[i,name])
// console.log(serialnum);

// 10.From last three, return only names in lowercase.
// let last3=obj.names.slice(-3).map(name=>name.toLowerCase());
// console.log(last3);
