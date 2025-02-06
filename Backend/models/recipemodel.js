const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:String,
    ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients'}],
    mealType: {type:String, enum:['Breakfast','Lunch','Dinner']},
    dietaryPreferences:String,
    nutrition:{
        calories: Number,
        fats: Number,
        protein: Number,
        carbohydrates: Number,
    },
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Recipe', recipeSchema);