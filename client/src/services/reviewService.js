import axios from "axios";

const BASE_URL = "https://zivora-262a.onrender.com/api/reviews";

export const getReviews = (productId) =>
  axios.get(`${BASE_URL}/${productId}`);

export const createReview = (productId, reviewData, token) =>
  axios.post(`${BASE_URL}/${productId}`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateReview = (reviewId, reviewData, token) =>
  axios.put(`${BASE_URL}/${reviewId}`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteReview = (reviewId, token) =>
  axios.delete(`${BASE_URL}/${reviewId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const getTopReviews = async () => {
  const { data } = await API.get("/reviews/top");
  return data;
};