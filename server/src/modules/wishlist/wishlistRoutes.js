import express from "express";

import { protect } from "../auth/auth.middleware.js";

import {
  addToWishlist,
  getWishlist,
  removeWishlistItem,
  clearWishlist,
} from "./wishlist.controller.js";



const router = express.Router();

router.get("/", protect, getWishlist);

router.post("/", protect, addToWishlist);

router.delete("/:productId", protect, removeWishlistItem);

router.delete("/", protect, clearWishlist);

export default router;