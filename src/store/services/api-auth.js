import axios from "./api-axios";

const getUserInfoApi = async (access_token) => {
  const data = { access_token: access_token };
  return await axios.get("/getUser", { headers: data });
};

export { getUserInfoApi };
