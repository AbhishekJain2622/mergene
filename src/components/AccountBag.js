import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function AccountBag() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    router.push({
      pathname: "/checkout",
      query: { cartData: JSON.stringify(cartItems) },
    });
  };

  return (
    <div className="relative flex items-center space-x-4">
      {/* Account Button */}
      <button className="text-lg font-semibold">
        <Link href="/account">Account</Link>
      </button>

      {/* Bag Button */}
      <button onClick={() => setIsOpen(true)} className="text-lg font-semibold">
        Bag ({cartItems.length})
      </button>

      {/* Cart Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-full sm:w-80 max-w-sm bg-white shadow-lg p-4 overflow-y-auto"
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="text-red-500 font-bold mb-4">
          Close ✖
        </button>

        <h2 className="text-xl font-bold">Your Bag ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-2 space-x-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-2 border rounded">-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-2 border rounded">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            ))}

            <p className="text-right text-lg font-bold mt-4">Subtotal: ${getTotalPrice().toFixed(2)}</p>
            <button 
              onClick={handleCheckout} 
              className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
