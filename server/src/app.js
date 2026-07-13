import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

import authRoutes from "./modules/auth/auth.routes.js";
import listingRoutes from "./modules/listing/listing.route.js";
import cartRoutes from "./modules/cart/cartRoutes.js";
import orderRoutes from "./modules/orders/orderRoutes.js";
import reviewRoutes from "./modules/reviews/reviewRoutes.js";
import wishlistModel from "./modules/wishlist/wishlistModel.js";
const app = express();

app.use(
  cors({
    origin: "https://zivora-frontend.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message,
    error: err,
  });
});

app.get("/", (req, res) => {
  res.send("you are on home page");
});

export default app;