import express from'express';
import {createPlan,getPlan,suggestPlans} from'../controllers/mealPlanController.js';

const router = express.Router();
router.post('/',createPlan);
router.get('/:userId',getPlan);
router.post('/suggest',suggestPlans);

export default router;