import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the path if necessary

const electronics = [
    {
        id: 1,
        name: "DJACK complete sound system",
        price: "$1,200/day",
        location: "Downtown",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Oraimo mp3",
        price: "$850/day",
        location: "Uptown",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Samsung TV; LED display",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80"
    }
];

const Electronics = ({ random }) => {
    const { addToCart } = useCart();

    const items = random ? [electronics[Math.floor(Math.random() * electronics.length)]] : electronics;

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Electronics</h2>
            <div className="flex flex-wrap gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-72 hover:shadow-lg transition-shadow">
                        <img src={item.image} alt={item.name} className="w-56 h-36 object-cover rounded-md mb-3" />
                        <div className="text-lg font-semibold text-gray-700">{item.name}</div>
                        <div className="text-gray-500">{item.location}</div>
                        <div className="text-blue-600 font-bold mt-1">{item.price}</div>
                        <div className="flex gap-2 mt-3">
                            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View</button>
                            <button
                                onClick={() => addToCart(item)}
                                className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Electronics;
