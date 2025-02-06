import mongoose from "mongoose";

const IngredientsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: Number,
  fats: Number,
  protein: Number,
  carbohydrates: Number
});

export default mongoose.model("Ingredients", IngredientsSchema);
