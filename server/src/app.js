import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

import authRoutes from "./modules/auth/auth.routes.js";

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


app.get("/", (req, res) => {
  res.send("you are on home page");
});

export default app;