import express from 'express';
import { createIngredient, getAllIngredients, getSingleIngredient, updateIngredient, deleteIngredient } from '../controllers/ingredientController.js';

const router = express.Router();

router.get('/', getAllIngredients);
router.post('/', createIngredient);
router.get('/:id', getSingleIngredient);
router.put('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);

export default router;
