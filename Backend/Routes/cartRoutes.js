import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { addToCart, getCart, removeFromCart } from "../Controllers/cartController.js";

const router = express.Router();

router.post("/add", verifyToken, addToCart);
router.get("/", verifyToken, getCart);
router.delete("/remove/:productId", verifyToken, removeFromCart);

export default router;
