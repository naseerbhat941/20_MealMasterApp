import express from 'express';
import { createIngredient, getAllIngredients, getSingleIngredient, updateIngredient, deleteIngredient } from '../controllers/ingredientController.js';

const router = express.Router();

router.post('/', createIngredient);
router.get('/', getAllIngredients);
router.get('/:id', getSingleIngredient);
router.put('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);

export default router;
