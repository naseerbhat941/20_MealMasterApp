const express = require('express');

const {foodentry,getDailyIntake} = require('../controllers/nutritiontrackcontroller.js');

const router = express.Router();

router.post('/log',foodentry);
router.get('/:userId/daily-intake',getDailyIntake);

module.exports = router;