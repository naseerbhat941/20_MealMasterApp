import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.dbURI;
const start = async () => {
  try {
    await connectToDb(dbURI);
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  console.log(`app is listning on port ${port}`);
});
