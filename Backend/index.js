import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import {verifyToken} from "./middlewares/verifyToken.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const adminEmail = "ghazwahjadoon863@gmail.com";
const adminPassword = "ghazwah863";


const PORT = process.env.PORT || 5000;

// MAKE UPLOADS PUBLIC
app.use("/uploads", express.static("uploads"));

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ROUTES
import userRoutes from "./Routes/userRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import registerRoutes from "./Routes/registerRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
app.use("/api/login", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
