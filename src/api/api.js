import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
