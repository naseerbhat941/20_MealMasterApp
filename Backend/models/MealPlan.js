import mongoose from 'mongoose';

const MealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  weekStartDate: Date,
  meals: [
    {
      day: String,
      mealType: String,
      recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
    }
  ]
});

export default mongoose.model('MealPlan', MealPlanSchema);
