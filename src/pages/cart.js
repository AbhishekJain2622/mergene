import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bag ({cartItems.length})</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="border p-4 rounded-lg">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <div className="flex-1 px-4">
                <p className="font-semibold">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 border">-</button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 border">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-right text-lg font-bold">Subtotal: ${getTotalPrice().toFixed(2)}</p>
          </div>

          <Link href="/checkout">
            <button className="w-full bg-black text-white py-2 mt-4">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
