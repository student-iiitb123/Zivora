import "./loadEnv.js";   // must be first

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});