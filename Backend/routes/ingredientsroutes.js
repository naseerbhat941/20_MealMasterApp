const express = require('express');
const {createIngridient,getAllIngredients,getSingleingredient,updateingredient,deleteingredient} = require('../controllers/ingredientscontroller.js');

const router = express.Router();

router.post('/',createIngridient);
router.get('/',getAllIngredients);
router.get('/:id',getSingleingredient);
router.put('/:id',updateingredient);
router.delete('/:id',deleteingredient);
module.exports = router;