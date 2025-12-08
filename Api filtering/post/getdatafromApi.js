import api from "./api.js";
const data = await api();

// const post25 = data?.find((x) => x.id === 25);
// // console.log(post25);

// const res=data?.filter(f=>f.tags.includes('crime'))
// console.log(res)

// const morethen5000=data?.filter(f=>f.views>5000);
// console.log(morethen5000)

// const market = data?.filter((f) => f.body.includes("candy")).map((m) => m.id);
// console.log(market);

// const like = data.find((f) => f.reactions.likes === 127)||{};
// let newans={
//     id:`${like?.id || null}`,
//     rectlike:`${like?.reactions?.likes || null}`,
//     rectdislike:`${like?.reactions?.dislikes ||null}`
// }
// // console.log(like);
// console.log(newans)


// const shortPosts = data.filter(post => post.body.length < 200);
// console.log(shortPosts);

// const result = data.filter(post =>
//   post.tags.includes("history") && post.tags.includes("american")
// );

// console.log(result);

// const searchtag=["history","american","mystery"];
// const ans=data.filter(f=>
//     searchtag.every(tag=>f.tags.includes(tag))
// )
// console.log(ans)

const searchtag=["history","american","mystery"];
const ans=data.filter(f=>
    searchtag.some(tag=>f.tags.includes(tag))
).length
console.log(ans)