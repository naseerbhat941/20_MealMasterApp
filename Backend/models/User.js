import mongoose from "mongoose";
import argon2 from "argon2";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin", "nutritionist"], default: "user" },
  dietaryPreferences: [String], // Example: ["vegetarian", "gluten-free"]
  fitnessGoals: String, // Example: "weight loss" or "muscle gain"
  resetToken: String,
  tokenExpiration: Date,
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.comparePassword = function (enteredPassword) {
  return argon2.verify(this.password, enteredPassword);
};

UserSchema.methods.generateResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetToken = resetToken;
  this.tokenExpiration = Date.now() + 3600000;
  return resetToken;
};

export default mongoose.model("User", UserSchema);
