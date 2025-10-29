const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
  total: { type: Number, required: true },
  customerName: { type: String },
  customerEmail: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
