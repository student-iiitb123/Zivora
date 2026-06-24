import axios from "axios";

const API = "https://zivora-262a.onrender.com/api/orders";

export const placeOrder = (data) =>
  axios.post(`${API}/checkout`, data);

export const getUserOrders = (userId) =>
  axios.get(`${API}/user/${userId}`);

export const getAllOrders = () =>
  axios.get(`${API}/`, { timeout: 15000 });