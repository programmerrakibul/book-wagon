import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.SERVER_URL,
});

const useSecureAxios = () => {
  return instance;
};

export default useSecureAxios;
