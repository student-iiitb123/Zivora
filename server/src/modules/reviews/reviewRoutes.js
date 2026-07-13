import express from "express";
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
  getTopReviews,
} from "./reviewController.js";

import  { protect }  from "../auth/auth.middleware.js";

const router = express.Router();

// Add a review
router.post("/:productId",protect, createReview);

// Get all reviews for a product
router.get("/:productId", getProductReviews);

// Update a review
router.put("/:reviewId",protect, updateReview);

// Delete a review
router.delete("/:reviewId",protect, deleteReview);


router.get("/top", getTopReviews);

export default router;