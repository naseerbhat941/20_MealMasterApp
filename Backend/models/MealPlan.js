import mongoose from "mongoose";

const MealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weekStartDate: { type: Date, required: true },
  meals: [
    {
      day: { type: String, required: true }, // Example: "Monday"
      mealType: { type: String, required: true }, // Example: "Breakfast"
      recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true }
    }
  ]
});

export default mongoose.model("MealPlan", MealPlanSchema);
