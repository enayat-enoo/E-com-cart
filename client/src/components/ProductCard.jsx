function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 mt-1">₹{product.price}</p>
      </div>
      <button
        onClick={() => addToCart(product._id)}
        className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
