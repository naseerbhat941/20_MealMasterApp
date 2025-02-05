import mongoose from "mongoose";
import argon2 from "argon2";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin", "nutritionist"], default: "user" },
  dietaryPreferences: [String],
  fitnessGoals: String,
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.comparePassword = function (enteredPassword) {
  return argon2.verify(this.password, enteredPassword);
};

export default mongoose.model("User", UserSchema);
