import axios from "axios";
const BASE_URL = "http://localhost:3001";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {},
});

export const getObject = (bucket, objectId) => {
  const url = `/object/${bucket}/${objectId}`
  return instance.get(url)
};

export const listObjects = (bucket) => {
  const url = `/objects/${bucket}`
  return instance.get(url)
};