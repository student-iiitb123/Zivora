import express from "express";
import { signup, login } from "./auth.controller.js";
import { signupValidation } from "./auth.validation.js";
import { loginValidation } from "./auth.validation.js";
const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);



export default router;