import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
} from "./orderController.js";

const router = express.Router();

router.post("/checkout", createOrder);

router.get("/", getAllOrders);

router.get("/user/:userId", getUserOrders);

router.put(
  "/:orderId/status",
  updateOrderStatus
);

export default router;