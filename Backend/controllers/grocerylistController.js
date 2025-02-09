import MealPlan from'../models/MealPlan.js';
// import Recipe from'../models/recipemodel.js';

 export const groceryList = async(req,res) => {
    try{
        const userId = req.params.userId;
        const mealPlan = await MealPlan.findOne({user: userId}).populate('meals.recipeId');
        if(!mealPlan){
            return res.status(404).json({message: 'No Meal plan Found!'});
        }
        let Grocery_List = {};
        mealPlan.meals.forEach(meal => {
            const recipe = meal.recipeId;
            if(recipe && recipe.ingredients){
                recipe.ingredients.forEach(ingredient => {
                    Grocery_List[ingredient] = (Grocery_List[ingredient] || 0) + 1;
                });
            }
        });
        return res.status(200).json({Grocery_List});
    }
    catch(error){
        res.status(500).json({error: 'Unable to create grocery list'});
    }
}
