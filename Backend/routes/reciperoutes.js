const express = require('express');

const {getAllRecipes,createRecipe,getSingleRecipe,updaterecipe,deleteRecipe} = require('../controllers/recipecontroller.js');

const router = express.Router();

router.get('/',getAllRecipes);
router.post('/',createRecipe);
router.get('/:id',getSingleRecipe);
router.put('/:id',updaterecipe);
router.delete('/:id',deleteRecipe);

module.exports = router;