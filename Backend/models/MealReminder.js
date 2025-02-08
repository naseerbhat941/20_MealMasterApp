const mongoose = require('mongoose');
const mealReminderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
    mealplan : {type:mongoose.Schema.Types.ObjectId,ref:'MealPlan'},
    mealtime: Date,
    message: String
});

module.exports = mongoose.model('MealReminder',mealReminderSchema);