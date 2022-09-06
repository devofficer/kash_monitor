import axios from "axios";

const apiAxios = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

apiAxios.interceptors.response.use((response) => {
  return response.data;
});

export default apiAxios;
