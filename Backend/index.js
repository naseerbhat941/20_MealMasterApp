import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./db.js";
import authRoutes from './routes/authRoutes.js'
import adminRoutes from "./routes/adminRoutes.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;
const dbURI = process.env.dbURI;
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)

const start = async () => {
  try {
    await connectToDb(dbURI);
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start()