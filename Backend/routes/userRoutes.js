import express from 'express';
import { register, login, forgotPassword ,getUserById} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/:id',getUserById)

export default router;
