import React from 'react';
import { useCart } from './CartContext';

const CartButton = ({ onClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
      Cart ({itemCount})
    </button>
  );
};

export default CartButton;
