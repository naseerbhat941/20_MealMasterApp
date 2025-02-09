import express from'express';

import {setReminder,getReminder}from'../controllers/mealReminderController.js';

const router = express.Router();
router.post('/',setReminder);
router.get('/:userId',getReminder);

export default router;