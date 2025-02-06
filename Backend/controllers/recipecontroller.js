import Recipe from "../models/Recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("ingredients");
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Recipe fetching failed!" });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, mealType, dietaryPreferences, nutrition } =
      req.body;
    const newRecipe = new Recipe({
      name,
      ingredients,
      mealType,
      dietaryPreferences,
      nutrition,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: "Error in creating recipe!" });
  }
};

export const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("ingredients");
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found!" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error in fetching recipe!" });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: "Error in updating recipe!" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Recipe Deleted!" });
  } catch (error) {
    res.status(500).json({ error: "Error in deleting Recipe!" });
  }
};
