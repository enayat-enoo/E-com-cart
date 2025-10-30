const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model("CartItem", cartItemSchema);
