import express from 'express';
import { createRecipe, getAllRecipes, getSingleRecipe, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/', getAllRecipes);
router.post('/', createRecipe);
router.get('/:id', getSingleRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;
