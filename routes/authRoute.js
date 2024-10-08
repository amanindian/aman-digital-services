import express from "express";
import { registerController } from "../controllers/authController.js";
import { loginController } from "../controllers/loginController.js";

//Router Object
const router = express.Router();

//Routing
//REGISTER || Method POST
router.post("/register", registerController);

// Login
router.post("/login", loginController);


export default router;