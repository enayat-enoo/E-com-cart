function ReceiptModal({ receipt, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl">
        <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
          ✅ Checkout Successful
        </h2>

        <p className="text-gray-700 mb-2">
          <span className="font-medium">Total:</span> ₹{receipt.total}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-medium">Timestamp:</span>{" "}
          {new Date(receipt.timestamp).toLocaleString()}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ReceiptModal;
