import express from 'express';

import {foodentry,getDailyIntake,setGoals,getGoals} from '../controllers/foodLogController.js';

const router = express.Router();

router.post('/log',foodentry);
router.get('/:userId/daily-intake',getDailyIntake);
router.post('/goals',setGoals);
router.get('/goals/:userId',getGoals);

export default router;