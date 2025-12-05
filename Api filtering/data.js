const users = [
  { id: 1, name: "Amit", email: "amit@gmail.com" },
  { id: 2, name: "Riya", email: "riya@gmail.com" },
  { id: 3, name: "Karan", email: "karan@gmail.com" },
];

const orders = [
  { orderId: 101, userId: 1, product: "Laptop", amount: 45000 },
  { orderId: 102, userId: 3, product: "Mobile", amount: 18000 },
  { orderId: 103, userId: 4, product: "Tablet", amount: 12000 },
];

// let userdata = users.map((m) => m.id);
// console.log(userdata);   // [1,2,3]

// let res = orders
//   .filter((f) => !userdata.includes(f.userId))
//   .map((m) => m.userId);

// console.log(res);   // [4]

let res = [];

orders.forEach(order => {

  let isUserExists = users.some(u => u.id === order.userId);

  if (!isUserExists) {
    res.push(order.userId);
  }
});

console.log(res); 