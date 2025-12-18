const api = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users ");
    if (res.status === 404) return [];
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.log(error);
  }
};

let data1 = await api();
// console.log(data1);
export default api;