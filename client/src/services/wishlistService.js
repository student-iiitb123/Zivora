import axios from "axios";

const API = "https://zivora-262a.onrender.com/api/wishlist";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token;
};

export const getWishlist = () =>
  axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const addToWishlist = (productId) =>
  axios.post(
    API,
    { productId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

export const removeFromWishlist = (productId) =>
  axios.delete(`${API}/${productId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const clearWishlist = () =>
  axios.delete(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });