import Ingredient from "../models/Ingredient.js";

export const createIngredient = async (req, res) => {
  try {
    const { name, calories, fats, protein, carbohydrates } = req.body;
    const ingredient = new Ingredient({ name, calories, fats, protein, carbohydrates });
    await ingredient.save();
    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).json({ error: "Unable to create ingredient!" });
  }
};

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: "Error in fetching ingredients!" });
  }
};

export const getSingleIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) return res.status(404).json({ error: "Ingredient Not found!" });
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({ error: "Fetching failed!" });
  }
};
export const updateIngredient = async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedIngredient);
  } catch (error) {
    res.status(500).json({ error: "Error in updating ingredient!" });
  }
};
export const deleteIngredient = async (req, res) => {
  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ingredient Deleted!" });
  } catch (error) {
    res.status(500).json({ error: "Error in deleting ingredient!" });
  }
};
