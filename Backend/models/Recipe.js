import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  dietaryPreferences: [String], // Example: ["vegan", "low-carb"]
  macronutrients: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number
  }
});

export default mongoose.model("Recipe", RecipeSchema);
