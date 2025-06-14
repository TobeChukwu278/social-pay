import React from 'react';
import { useCart } from '../Cart/CartContext'; // Ensure this path is correct

const accessories = [
    {
        id: 1,
        name: "Leather Wallet",
        price: "$25",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Sunglasses",
        price: "$40",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Wrist Watch",
        price: "$120",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Backpack",
        price: "$60",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    }
];

const Accessories = ({ random }) => {
    const { addToCart } = useCart(); // Hook from cart context

    const items = random ? [accessories[Math.floor(Math.random() * accessories.length)]] : accessories;

    return (
        <div className="py-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Accessories</h3>
            <div className="flex flex-wrap gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-64 hover:shadow-lg transition-shadow">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-3" />
                        <div className="text-lg font-semibold text-gray-700">{item.name}</div>
                        <div className="text-blue-600 font-bold mt-1">{item.price}</div>

                        <button
                            onClick={() => addToCart(item)}
                            className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accessories;
