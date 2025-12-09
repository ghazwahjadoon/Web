import express from "express";
import {  loginUser} from "../Controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/", loginUser);
// router.get("/profile", verifyToken, getUserProfile);
// router.put("/profile", verifyToken, updateUserProfile);
// router.get("/profile", verifyToken, getUserProfile);
//routes protected 

// // Get all users
// router.get("/", getUsers);

// // Login user
// router.post("/", loginUser);

// // Get user profile by email
// router.get("/by-email/:email", getUserByEmail);

// // Update user profile by email
// router.put("/by-email/:email", updateUserByEmail);

// // Delete user profile by email
// router.delete("/by-email/:email", deleteUserByEmail);

export default router;
