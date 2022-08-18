import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://62e263ce3891dd9ba8e6e43b.mockapi.io",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
