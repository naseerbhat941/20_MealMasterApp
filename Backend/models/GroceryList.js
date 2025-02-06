import mongoose from "mongoose";

const GroceryListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ name: { type: String, required: true }, quantity: { type: String, required: true } }]
});

export default mongoose.model("GroceryList", GroceryListSchema);
