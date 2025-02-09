const express = require('express');

const {foodentry,getDailyIntake,setGoals,getGoals} = require('../controllers/nutritiontrackcontroller.js');

const router = express.Router();

router.post('/log',foodentry);
router.get('/:userId/daily-intake',getDailyIntake);
router.post('/goals',setGoals);
router.get('/goals/:userId',getGoals);

module.exports = router;