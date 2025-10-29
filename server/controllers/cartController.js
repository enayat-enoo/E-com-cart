const CartItem = require("../models/CartItem.js");

const getCart = async (req, res) => {
  try {
    const cart = await CartItem.find().populate("product");
    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    res.status(200).json({ cart, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const existing = await CartItem.findOne({ product: productId });
    if (existing) {
      existing.quantity += qty;
      await existing.save();
    } else {
      await CartItem.create({ product: productId, quantity: qty });
    }
    res.status(201).json({ message: "Item added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await CartItem.findByIdAndDelete(id);
    res.status(200).json({ message: "Item removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
