const express = require('express');

const {setReminder,getReminder} = require('../controllers/mealReminderController.js');

const router = express.Router();
router.post('/',setReminder);
router.get('/:userId',getReminder);

module.exports = router;