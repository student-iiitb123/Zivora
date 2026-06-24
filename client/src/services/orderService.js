import axios from "axios";

const API = "https://zivora-262a.onrender.com/api/orders";

export const placeOrder = (data) =>
  axios.post(`${API}/checkout`, data);

export const getUserOrders = (userId) =>
  axios.get(`${API}/user/${userId}`);

export const getAllOrders = () => {
  return axios.get("https://zivora-262a.onrender.com/api/orders/admin", {
    timeout: 15000, // fail after 15s instead of hanging forever
  });
};