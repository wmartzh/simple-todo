import axios from "axios";

const baseURL = import.meta.env.VITE_DARKFLOW_HOST ?? "localhost";


const axiosInstance = axios.create({
  baseURL
});

///configs ----

export default axiosInstance;
