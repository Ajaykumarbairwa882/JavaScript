const customer = [
  {
    customerid: 101,
    name: "Prajjal Dhar",
    contact: {
      phone: "9876543210",
      email: "prajjal@example.com",
    },
    address: {
      street: "MG Road",
      city: "Siliguri",
      pincode: 734001,
    },
  },
  {
    customerid: 102,
    name: "Amit Yadav",
    contact: {
      phone: "9988776655",
      email: "amit@example.com",
    },
    address: {
      street: "Park Street",
      city: "Kolkata",
      pincode: 700016,
    },
  },
];

const items = [
  {
    customerid: 101,
    productId: "MOB-110",
    productName: "Samsung Galaxy S24",
    quantity: 1,
    price: 65000,
    specs: {
      ram: "8GB",
      storage: "256GB",
      warranty: ["screen", "battery"],
    },
  },
  {
    customerid: 101,
    productId: "ACC-220",
    productName: "Fast Charger 45W",
    quantity: 1,
    price: 2999,
    isOriginal: true,
  },
  {
    customerid: 102,
    productId: "LAP-230",
    productName: "HP Pavilion 15",
    quantity: 1,
    price: 72000,
    specs: {
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA MX450",
    },
  },
];

const payment = [
  {
    customerid: 101,
    paymentid: "1",
    method: "UPI",
    status: "Paid",
    transactionId: "TXN5678990",
  },
  {
    customerid: 102,
    paymentid: "2",
    method: "Credit Card",
    status: "Pending",
    transactionId: null,
  },
];

const orderStatus = [
  {
    customerid: 101,
    orderStatusid: "1",
    placed: "2025-11-18",
    dispatched: "2025-11-19",
    expectedDelivery: "2025-11-22",
  },
  {
    customerid: 102,
    orderStatusid: "2",
    placed: "2025-11-19",
    dispatched: null,
    expectedDelivery: null,
  },
];

const couponApplied = [
  { customerid: [102], couponId: "1", code: "NEWUSER10", discount: "10%" },
];