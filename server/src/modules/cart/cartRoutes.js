import express from "express";
import { addToCart, getCart, removeCartItem, updateQuantity } from "./cartController.js";
const router = express.Router();

router.post("/add", addToCart);

router.get("/:userId", getCart);

router.delete("/remove", removeCartItem);

router.put("/quantity", updateQuantity);
export default router;

