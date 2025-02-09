const express = require('express');
const {groceryList} = require('../controllers/grocerylistController.js');

const router = express.Router();

router.get('/:userId',groceryList);

module.exports = router;