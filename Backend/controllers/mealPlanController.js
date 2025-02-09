import  MealPlan from'../models/MealPlan.js';
import Recipe from'../models/Recipe.js';

 export const createPlan = async(req,res) => {
    try{
        const {user,weekStartDate, meals} = req.body;
        let mealPlan = await MealPlan.findOne({user,weekStartDate});
        if(mealPlan){
            mealPlan.meals = meals;
            await mealPlan.save();
        }else{
            mealPlan = new MealPlan({user,weekStartDate,meals});
            await mealPlan.save();
        }
        res.status(201).json({message: 'Meal Plan Created!',mealPlan});
    }
    catch(error){
        res.status(500).json({error: 'unable to save meal plan!'});
    }
};

export const getPlan = async(req,res) => {
    try{
        const userId = req.params.userId;
        const mealPlan = await MealPlan.findOne({user: userId}).sort({weekStartDate: -1}).populate('meals.recipeId');
        if(!mealPlan){
            return res.status(404).json({message: 'No Mealplan for the user of this week!'});
        }
        return res.status(200).json({mealPlan});
    }
    catch(error){
        res.status(500).json({error: 'Unable to fetch mealplan!'});
    }
};

export const suggestPlans = async(req,res) => {
    try{
        const {dietaryPreferences} = req.body;
        const suggestRecipe = await Recipe.find({category: {$in: dietaryPreferences}}).limit(10);
        res.status(200).json({suggestRecipe});
    }
    catch(error){
        res.status(500).json({error: 'Unable to get recipes!'});
    }
}



