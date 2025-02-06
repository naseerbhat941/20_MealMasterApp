const mongoose = require('mongoose');

const IngredientsSchema = new mongoose.Schema({
    name:String,
    calories: Number,
    fats: Number,
    protein:Number,
    carbohydrates: Number,
});

module.exports = mongoose.model('Ingredients',IngredientsSchema);