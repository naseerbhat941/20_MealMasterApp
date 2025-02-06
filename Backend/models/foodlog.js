import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
  nutrientsPortion: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  nutrition: {
    calories: Number,
    fats: Number,
    protein: Number,
    carbohydrates: Number
  }
});

export default mongoose.model("FoodLog", FoodSchema);
