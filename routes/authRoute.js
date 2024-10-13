import express from "express";
import { registerController } from "../controllers/authController.js";
import { loginController, testController } from "../controllers/loginController.js";
import { isAdmin, requireSigning } from "../middleware/authMiddleware.js";

//Router Object
const router = express.Router();

//Routing
//REGISTER || Method POST
router.post("/register", registerController);

// Login
router.post("/login", loginController);

// Test Controller for test all authentication using JSON Web Token
router.get("/test", requireSigning, isAdmin, testController);


export default router;