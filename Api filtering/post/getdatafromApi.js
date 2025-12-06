import api from "./api.js";
const data = await api();

const post25 = data?.find((x) => x.id === 25);
// console.log(post25);

const res=data?.filter(f=>f.tags.includes('crime'))
console.log(res)
