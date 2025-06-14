import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, i) => sum + parseFloat(i.price.replace('$', '')) * i.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-xl">&times;</button>
      </div>
      <div className="p-4 overflow-y-auto flex-1">
        {cartItems.length === 0 ? <p className="text-gray-500">Cart is empty.</p> : cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between mb-3 font-semibold">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
