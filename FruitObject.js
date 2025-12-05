// let fruits = ["apple", "banana", "kiwi", "orange", "avacardo", "blueberry"];

//   {
//     a: {
//       short: [],
//       medium: [],
//       large: [],
//     },
//   },
//   {
//     b: {
//       short: [],
//       medium: [],
//       large: [],
//     },
//   },

// short <= 5;
// medium(6 - 8);
// large:(8-15);

// let res={}
// fruits.forEach((fruit)=>{
//     const key=fruit.at(0);
//     const len=fruit.length;
//     let label="";
//     if(len>=5){
//         label="short";
//     }
//     else if(len>=6 && len<=8){
//         label="medium";
//     }
//     else {
//         label="large";
//     }
//     res[key]=res[key] || {};
//     res[key][label] =res[key][label] || [];
//     res[key][label].push(fruit);
// })
// console.log(res)

const weight = [
  1,
  2,
  3,
  4,
  5,
  ,
  45,
  564,
  56,
  6567,
  67,
  567856,
  8,
  678,
  678,
  79,
  78,
  85645,
  34,
  6,
  534534,
  5,
];
// let res ={}
// weight.forEach(w=>{
//     const datatype=(w%2===0)?"even":"odd";
//     res[datatype]=res[datatype] || {};
//     let len=w.toString().length;
//     let lable="";
//     if(len===1){
//         lable="small";
//     }
//     else if(len>=2 && len<=3){
//         lable="medium";
//     }
//     else{
//         lable="large";
//     }
//     res[datatype][lable] =res[datatype][lable] || [];
//     res[datatype][lable].push(w);
// })

// console.log(res)

// let ans = weight.reduce((res, w) => {
//   const datatype = w % 2 === 0 ? "even" : "odd";
//   res[datatype] = res[datatype] || {};
//   let len = w.toString().length;
//   let lable = (len === 1) ?("small"):(len >= 2 && len <= 3)?("medium"):("large");
//   res[datatype][lable] = res[datatype][lable] || [];
//   res[datatype][lable].push(w);
//   return res;
// }, {});
// console.log(ans);
