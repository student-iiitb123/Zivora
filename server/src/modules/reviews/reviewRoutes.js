import express from "express";
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
  getTopReviews,
} from "./reviewController.js";

import { protect } from "../auth/auth.middleware.js";

const router = express.Router();

// Top reviews (must come before /:productId)
router.get("/top", getTopReviews);

// Add review
router.post("/:productId", protect, createReview);

// Get reviews of product
router.get("/:productId", getProductReviews);

// Update review
router.put("/:reviewId", protect, updateReview);

// Delete review
router.delete("/:reviewId", protect, deleteReview);

export default router;