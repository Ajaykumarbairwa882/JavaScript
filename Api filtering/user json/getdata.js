import api from "./api.js";
const data = await api();
// console.log(data)

// create id , email,phone, users

// let ans =data.map(u=>{
//     return{
//         id:u.id,
//         email:u.email,
//         phone:u.phone,
//         age:u.age,
//     }
// })
// console.log(ans)

// if every user have email and phone
// let ans1=ans.every(e=>e.email && e.phone);
// console.log(ans1)// ture

// let ans1=ans.every(e=>e.age>18);
// console.log(ans1)// ture

// let res=ans.filter(f=>(f.age<30));
// console.log(res)

// let mails=data.map(m=>m.email)
// console.log(mails)

// let dotcom=mails.filter(f=>f.endsWith('.com'));
// console.log(dotcom)
// let dotcom=mails.filter(f=>f.startsWith('l'));
// console.log(dotcom)

let ans = data.map((m) => m.company.department);
// let freq = {};
// ans.forEach(num => {
//   freq[num] = (freq[num] || 0) + 1;
// });
// console.log(ans)

// let freq =ans.reduce((acc,curr)=> {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// },{});
// console.log(`>>>>>>>>>> reduce `,freq)

let res=ans.reduce((freq,depat)=>{
    return{
        ...freq,
        // [depat]:(freq[depat]||0)+1
        [depat]:freq[depat]?freq[depat]+1:1
    }
},{})
console.log(`>>>>>>>>>> reduce `,res)

// let res = [...new Set(ans)];
// console.log(res);
