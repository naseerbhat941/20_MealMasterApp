const mongoose = require('mongoose');

const nutritionGoalSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    dailyCalories: Number,
    dailyfats: Number,
    dailyprotein: Number,
    dailycarbohydrates: Number
});

module.exports = mongoose.model('Goal',nutritionGoalSchema);