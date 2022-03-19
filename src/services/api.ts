import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export const urlImage = process.env.REACT_APP_URL_AVATAR;
