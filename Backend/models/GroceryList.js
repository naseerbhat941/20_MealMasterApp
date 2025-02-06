import mongoose from 'mongoose';

const GroceryListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ name: String, quantity: String }]
});

export default mongoose.model('GroceryList', GroceryListSchema);
