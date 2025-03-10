import mongoose from 'mongoose';

const nutritionGoalSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    dailyCalories: Number,
    dailyfats: Number,
    dailyprotein: Number,
    dailycarbohydrates: Number
});

export default mongoose.model('Goal',nutritionGoalSchema);