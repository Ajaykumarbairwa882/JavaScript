const students = [
  { name: "Amit", gender: "male", marks: 92, subject: "math" },
  { name: "Priya", gender: "female", marks: 88, subject: "science" },
  { name: "John", gender: "male", marks: 45, subject: "english" },
  { name: "Riya", gender: "female", marks: 72, subject: "math" },
  { name: "Arjun", gender: "male", marks: 60, subject: "science" },
  { name: "Sara", gender: "female", marks: 38, subject: "english" },
  { name: "Dev", gender: "male", marks: 81, subject: "math" },
];

const result = {};

students.forEach((s) => {
  const { gender, marks, subject, name } = s;

  if (!result[gender]) result[gender] = { pass: {}, fail: {} };

  const status = marks >= 50 ? "pass" : "fail";

  if (!result[gender][status][subject]) {
    result[gender][status][subject] = [];
  }

  result[gender][status][subject].push(name);
});

console.log(result);