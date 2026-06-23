import axios from "axios";

const API = axios.create({
  baseURL: "https://zivora-262a.onrender.com/api",
});

export default API;