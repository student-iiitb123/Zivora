import axios from "axios";

const API = "https://zivora-262a.onrender.com/api/cart";

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