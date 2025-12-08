const fetch= async()=>{
     try {
    const res = await fetch("https://dummyjson.com/posts");
    if (res.status === 404) return "error";
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}
let data1 = await fetch();
export default fetch;