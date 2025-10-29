import { useState } from "react";
import axios from "../api";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ReceiptModal from "../components/ReceiptModel";

function CheckoutPage() {
  const { cart, userId, fetchCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/checkout", {
        cartItems: cart,
        name: formData.name,
        email: formData.email,
        userId,
      });
      setReceipt(res.data);
      await fetchCart(); // clear updated cart (if backend resets it)
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Checkout failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Checkout</h1>
        <Link
          to="/cart"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
        >
          Back to Cart
        </Link>
      </header>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-10 text-lg">
          Your cart is empty 🛒
        </p>
      ) : (
        <form
          onSubmit={handleCheckout}
          className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Processing..." : "Complete Checkout"}
          </button>
        </form>
      )}

      {receipt && (
        <ReceiptModal receipt={receipt} onClose={() => navigate("/")} />
      )}
    </div>
  );
}

export default CheckoutPage;
