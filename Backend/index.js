import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {connectToDb} from './config/db.js'
import userRoutes from './routes/userRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import foodLogRoutes from './routes/foodLogRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/foodlogs', foodLogRoutes);


const port = process.env.PORT
const dbURI= process.env.dbURI
const start = async () => {
  try {
    await connectToDb(dbURI);
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start()
