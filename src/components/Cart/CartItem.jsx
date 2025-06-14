import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-3 mb-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <div className="font-semibold text-gray-800">{item.name}</div>
        <div className="text-sm text-gray-600">${item.price} × {item.quantity}</div>
        <div className="flex gap-2 mt-1">
          <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200 rounded">-</button>
          <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
          <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-sm ml-auto">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
