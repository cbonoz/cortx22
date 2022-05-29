import axios from "axios";
const BASE_URL = "http://localhost:8000";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {},
});

export const getRows = (body) => {
  return instance.post("/fetch", body);
};

export const uploadRows = (body) => {
  return instance.post("/upload", body);
};