import express from 'express'
import User from '../models/user.models.js';
import {registerUser,loginUser }from "../Controllers/userController.js"
import { validateUser } from '../middlewares/validation.js';

const router = express.Router();

router.post("/register",validateUser,registerUser);
router.post("/login",loginUser);

export default router;