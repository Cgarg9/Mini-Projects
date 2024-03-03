import express from 'express';
import { signup, login, logout } from '../controllers/auth.controllers.js'
const router = express.Router();
// use controller to avoid writing everything here

router.post('/signup', signup)

router.post('/login', login);

router.post('/logout', logout);

export default router;