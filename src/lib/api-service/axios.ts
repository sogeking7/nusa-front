import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api1C = axios.create({
  baseURL: process.env.NEXT_PUBLIC_1C_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
