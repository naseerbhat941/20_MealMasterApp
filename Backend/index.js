import express from "express";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { setupGoogleOAuth } from "./config/googleOAuthStrategy.js";
import authRoutes from "./routes/authRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import ingredientRoutes from "./routes/ingredientRoutes.js";
import foodLogRoutes from "./routes/foodLogRoutes.js";
import mealPlanroutes from "./routes/mealPlanroutes";
import mealReminderroutes from "./routes/MealReminderroutes.js";
import grocerylistroutes from "./routes/grocerylistRoutes.js";
import remainderschedular from "./scheduler/remainderScheduler.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport for handling authentication
app.use(passport.initialize());
app.use(passport.session());

// Set up the Google OAuth strategy
setupGoogleOAuth(passport);

// Mount authentication routes
app.use("/auth", authRoutes);

// Mount home routes
app.use("/", homeRoutes);

app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/foodlog", foodLogRoutes);
app.use("/api/mealplan",mealPlanroutes);
app.use("/api/reminder",mealReminderroutes);
app.use("/api/grocery",grocerylistroutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
