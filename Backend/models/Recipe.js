import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true }],
    mealType: { type: String, enum: ["Breakfast", "Lunch", "Dinner"], required: true },
    dietaryPreferences: [{ type: String }], // Changed to an array
    nutrition: {
      calories: { type: Number, default: 0 },
      fats: { type: Number, default: 0 },
      protein: { type: Number, default: 0 },
      carbohydrates: { type: Number, default: 0 }
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
