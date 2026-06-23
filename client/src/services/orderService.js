import axios from "axios";

const API = "http://localhost:5000/api/orders";

export const placeOrder = (data) =>
  axios.post(`${API}/checkout`, data);

export const getUserOrders = (userId) =>
  axios.get(`${API}/user/${userId}`);

export const getAllOrders = () => {
  return axios.get(
    "http://localhost:5000/api/orders/admin"
  );
};