import User from "../models/UserLogin.js";
import bcrypt from "bcryptjs";
export const registerUser = async (req, res) => {
  console.log("REQUEST BODY:", req.body);

  try {
    const { email, password, fullName, address, city } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user using hashed password
    const newUser = new User({
      email,
      password: hashedPassword,   
      fullName,
      address,
      city,
    });

    await newUser.save();

    // Avoid sending password back
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    // Log full error in backend console
    console.error("REGISTER ERROR:", error);

    // Send readable error message to frontend
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
