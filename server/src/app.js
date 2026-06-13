import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("you are on home page");
});

export default app;