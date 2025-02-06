const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
    NutrientsPortion: Number,
    date: {type:Date, default: Date.now},
    nutrition: {
        calories:Number,
        fats:Number,
        protein:Number,
        carbohydrates: Number,
    },
});

module.exports = mongoose.model('FoodLog',FoodSchema);