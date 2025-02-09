import FoodLog from '../models/foodlog.js';
import Goal from '../models/Goal.js';

 export const foodentry = async(req,res) => {
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

export const getDailyIntake = async(req,res) => {
    try{
        const userId = req.params.userId;
        const goal = await Goal.findOne({ user: userId });
        const logs = await FoodLog.find({user: userId, date: {$gte: new Date().setHours(0,0,0,0)}});
        const totalintakes = logs.reduce((acc,log) => {
            acc.calories += log.nutrition.calories;
            acc.fats += log.nutrition.fats;
            acc.protein += log.nutrition.protein;
            acc.carbohydrates += log.nutrition.carbohydrates;
            return acc;
        }, {calories:0, fats:0 , protein:0 , carbohydrates:0});
        const remainingCalorie = goal.dailyCalories - totalintakes.calories;
        const remainingfat = goal.dailyfats - totalintakes.fats;
        const remainingprotein = goal.dailyprotein - totalintakes.protein;
        const remainingcarbohydrate = goal.dailycarbohydrates - totalintakes.carbohydrates
        res.status(200).json({userId,
            goals: goal,
            DailyIntakes: totalintakes,
            Remaining_Nutrients_Goal: {
                calories: remainingCalorie,
                fats: remainingfat,
                protein: remainingprotein,
                carbohydrates: remainingcarbohydrate
            }});
    }
    catch(error){
        res.status(500).json({error: 'Error Fetchinh Daily Inatake of the user!'});
    }
};

 export const setGoals = async(req,res) => {
    try{
        const {user,dailyCalories,dailyfats,dailyprotein,dailycarbohydrates} = req.body;
        let goal = await Goal.findOne({user});
        if(goal){
            goal.dailyCalories = dailyCalories;
            goal.dailyfats = dailyfats;
            goal.dailyprotein = dailyprotein;
            goal.dailycarbohydrates = dailycarbohydrates;
            await goal.save();
        }else{
            goal = new Goal({user,dailyCalories,dailyfats,dailyprotein,dailycarbohydrates});
            await goal.save();
        }
        res.status(200).json({message: 'Goal Saved successfully!',goal});
    }catch(error){
        res.status(500).json({error: 'Error in Creating goals!'});
    }
};

export const getGoals = async(req,res) => {
    try{
        const userId = req.params.userId;
        const goal = await Goal.findOne({user:userId});
        if(!goal){
            res.status(404).json({error: 'Unable to get goal!'});
        }
        res.status(200).json({userId,goals:goal});
    }
    catch(error){
        if (!res.headersSent) {
        res.status(500).json({error: 'Server error in fetching goals!'});
        }
    }
}
