import mongoose from "mongoose";

const MealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  weekStartDate: Date,
  meals: [
    {
      day: String, // Example: "Monday"
      mealType: String, // Example: "Breakfast"
      recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }
    }
  ]
});

export default mongoose.model("MealPlan", MealPlanSchema);
