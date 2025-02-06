import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
  NutrientsPortion: Number,
  date: { type: Date, default: Date.now },
  nutrition: {
    calories: Number,
    fats: Number,
    protein: Number,
    carbohydrates: Number,
  },
});

export default mongoose.model('FoodLog', FoodSchema);
