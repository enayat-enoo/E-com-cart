import { useEffect, useState } from "react";
import axios from "../api";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, fetchCart } = useCart();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get(`/api/cart`);
        setTotal(res.data.total);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    getCart();
  }, [cart]);

  const removeItem = async (id) => {
    try {
      await axios.delete(`/api/cart/${id}`);
      await fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Failed to remove item!");
    }
  };

  const updateQty = async (id, qty) => {
    try {
      if (qty < 1) return;
      await axios.post("/api/cart", { productId: id, qty });
      await fetchCart();
    } catch (error) {
      console.error("Error updating qty:", error);
    }
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🛍️ Your Cart</h1>
        <Link
          to="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
        >
          Back to Shop
        </Link>
      </header>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-10 text-lg">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                removeItem={removeItem}
                updateQty={updateQty}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-blue-700">₹{total}</span>
            </h2>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
