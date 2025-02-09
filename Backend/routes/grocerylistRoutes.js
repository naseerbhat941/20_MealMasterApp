import express from 'express';
import {groceryList}from '../controllers/grocerylistController.js'
const router = express.Router();

router.get('/:userId',groceryList);

export default router;