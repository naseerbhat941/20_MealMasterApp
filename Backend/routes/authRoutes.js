import express from 'express';
import { googleLogin, googleCallback, logout } from '../controllers/authController.js';

const router = express.Router();

// Route to start Google OAuth login
router.get('/google', googleLogin);

// Google OAuth callback route
router.get('/google/callback', googleCallback);

// Logout route
router.get('/logout', logout);

export default router;
