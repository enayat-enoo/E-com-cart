function CartItem({ item, removeItem, updateQty }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={item.image || "https://via.placeholder.com/100"}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.product.name}</h3>
          <p className="text-gray-600">₹{item.product.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQty(item._id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          -
        </button>
        <span className="text-lg font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQty(item._id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeItem(item._id)}
        className="text-red-600 hover:underline ml-4"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
