const FoodLog = require('../models/foodlog.js');

const foodentry = async(req,res) => {
    try{
        const {user,product,NutrientsPortion,nutrition} = req.body;
        const newEntry = new FoodLog({user,product,NutrientsPortion,nutrition});
        await newEntry.save();
        res.status(201).json(newEntry);
    }
    catch(error){
        res.status(500).json({error: 'Unable to get food entry!'});
    }
};

const getDailyIntake = async(req,res) => {
    try{
        const userId = req.params.userId;
        const logs = await FoodLog.find({user: userId, date: {$gte: new Date().setHours(0,0,0,0)}});
        const totalintakes = logs.reduce((acc,log) => {
            acc.calories += log.nutrition.calories;
            acc.fats += log.nutrition.fats;
            acc.protein += log.nutrition.protein;
            acc.carbohydrates += log.nutrition.carbohydrates;
            return acc;
        }, {calories:0, fats:0 , protein:0 , carbohydrates:0});
        res.status(200).json({userId, DailyIntakes: totalintakes});
    }
    catch(error){
        res.status(500).json({error: 'Error Fetchinh Daily Inatake of the user!'});
    }
};

module.exports = {foodentry,getDailyIntake};