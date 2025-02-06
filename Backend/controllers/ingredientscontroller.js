const Ingredients = require('../models/ingredientsmodel.js');

const createIngridient = async(req,res) => {
    try{
        const {name,calories,fats,protein,carbohydrates} = req.body;
        const Ingredient = new Ingredients({name,calories,fats,protein,carbohydrates});
        await Ingredient.save();
        res.status(201).json({Ingredient});
    }
    catch(error){
        res.status(500).json({error: 'Unable to create ingredient!'});
    }
};

const getAllIngredients = async(req,res) => {
    try{
        const ingredients = await Ingredients.find();
        res.status(200).json(ingredients);
    }
    catch(error){
        res.status(500).json({error: 'Error in Fetching data!'});
    }
};

const getSingleingredient = async(req,res) => {
    try{
        const ingredient = await Ingredients.findById(req.parms.id);
        if(!ingredient){
            return res.status(404).json({error:'Ingredient Not found!'});
        }
        res.status(200).json(ingredient);
    }
    catch(error){
        res.status(500).json({error: 'fetching failed!'});
    }
};

const updateingredient = async(req,res) => {
    try{
        const Updatedingredient = await Ingredients.findOneAndUpdate(req.params.id,req.body);
        res.status(200).json(Updatedingredient);
    }
    catch(error){
        res.status(500).json({error: 'Error in updating ingredient!'});
    }
};

const deleteingredient = async(req,res) => {
    try{
        const Deleteidngredient = await Ingredients.findByIdAndDelete(req.params.id,req.body);
        res.status(200).json({message: 'Ingredient Deleted!'});
    }
    catch(error){
        res.status(500).json({error: 'Ingredient mismatch!'});
    }
}

module.exports = {createIngridient,getAllIngredients,getSingleingredient,updateingredient,deleteingredient};