import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
  total: { type: Number, required: true },
  customerName: { type: String },
  customerEmail: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
