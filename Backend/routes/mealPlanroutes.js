const express = require('express');
const {createPlan,getPlan,suggestPlans} = require('../controllers/mealPlanController.js');

const router = express.Router();
router.post('/',createPlan);
router.get('/:userId',getPlan);
router.post('/suggest',suggestPlans);

module.exports = router;