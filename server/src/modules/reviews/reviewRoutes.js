import express from "express";
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add a review
router.post("/:productId", verifyToken, createReview);

// Get all reviews for a product
router.get("/:productId", getProductReviews);

// Update a review
router.put("/:reviewId", verifyToken, updateReview);

// Delete a review
router.delete("/:reviewId", verifyToken, deleteReview);

export default router;