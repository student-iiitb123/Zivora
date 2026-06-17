import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

import authRoutes from "./modules/auth/auth.routes.js";
import listingRoutes from "./modules/listing/listing.route.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);

app.get("/", (req, res) => {
  res.send("you are on home page");
});

export default app;