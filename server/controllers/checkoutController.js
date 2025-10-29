const CartItem = require("../models/CartItem.js");
const Order = require("../models/Order.js");

 const checkout = async (req, res) => {
  const { name, email } = req.body;
  try {
    const cart = await CartItem.find().populate("product");
    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      cartItems: cart.map((i) => i._id),
      total,
      customerName: name,
      customerEmail: email,
    });

    await CartItem.deleteMany(); // clear cart after checkout

    res.status(201).json({
      message: "Checkout successful!",
      total,
      timestamp: order.timestamp,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports =  checkout;