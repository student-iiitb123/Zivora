import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});