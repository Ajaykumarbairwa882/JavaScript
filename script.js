// /addtion sub mul
const zoho = {
  addition: (initialstate, state) => [...initialstate, state],
};
//action type reducer state
let state1 = {
  name: "Prajjal",
  email: "prajjal@gmail.com",
  password: "65464HAsjkdbaskd",
};
let state2 = {
  name: "raj",
  email: "raj@gmail.com",
  password: "65464HAsjkdbaskd",
};

function calculatorReducer() {
  let initialstate = []; //private
  return {
    data: function (state, action) {
      let helper = zoho[action.type.toLowerCase()];
      initialstate = helper(initialstate, state);
      return initialstate;
    },
  };
}
let res = calculatorReducer();
let data = res.data(state1, { type: "additIon" });
console.log(data);

let data2 = res.data(state2, { type: "additIon" });
console.log(data2);

// console.log(initialstate);