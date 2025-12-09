
import express from  "express";
import { registerUser }  from '../Controllers/registerController.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router=express.Router();

router.post('/',registerUser);

export default router;