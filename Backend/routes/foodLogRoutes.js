import express from 'express';
import { foodEntry, getDailyIntake } from '../controllers/foodLogController.js';

const router = express.Router();

router.post('/', foodEntry);
router.get('/:userId', getDailyIntake);

export default router;
