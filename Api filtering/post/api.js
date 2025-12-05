const api = async () => {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (res.status === 404) return "error";
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

let data1 = await api();
// console.log(data1);
export default api;