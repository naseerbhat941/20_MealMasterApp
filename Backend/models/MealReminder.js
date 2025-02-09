import mongoose from'mongoose';
const mealReminderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
    mealplan : {type:mongoose.Schema.Types.ObjectId,ref:'MealPlan'},
    mealtime: Date,
    message: String
});

export default mongoose.model('MealReminder',mealReminderSchema);