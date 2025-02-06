import express from 'express';
import { getAllUsers, register, login, forgotPassword } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;
