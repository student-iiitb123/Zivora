import axios from "axios";

const API = "http://localhost:5000/api/cart";

export const getCart = (userId) => {
  return axios.get(`${API}/${userId}`);
};

export const addToCart = (data) => {
  return axios.post(`${API}/add`, data);
};

export const removeCartItem = (userId, itemId) => {
  return axios.delete(`${API}/remove`, {
    data: {
      userId,
      itemId,
    },
  });
};

export const updateQuantity = (
  userId,
  itemId,
  quantity
) => {
  return axios.put(`${API}/quantity`, {
    userId,
    itemId,
    quantity,
  });
};