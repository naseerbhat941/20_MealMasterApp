import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { sendResetEmail } from "../config/emailService.js";

export const register = async (req, res) => {
  const { name, email, password, role, dietaryPreferences,allergies,fitnessGoals } = req.body;
  try {
    const user = new User({ name, email, password, role, dietaryPreferences,allergies,fitnessGoals });
    await user.save();
    res.status(201).json({ message: "User Registered" });
  } catch (err) {
    res.status(500).json({ message: "Error Registering User" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login Failed" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User Not Found" });

  const resetToken = user.generateResetToken();
  await user.save();

  await sendResetEmail(email, resetToken);
  res.json({ message: "Reset Link Sent" });
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Respond with the user data
    res.status(200).json({ msg: "Success", user });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};
