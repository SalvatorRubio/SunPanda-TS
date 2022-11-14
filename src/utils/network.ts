import axios from "axios";

export const getApiResource = (url: string) => {
  return axios.get(url).then((res) => res.data);
};
