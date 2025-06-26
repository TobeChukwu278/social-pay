import React from 'react';
import { useCart } from '../Cart/CartContext'; // Update path as needed

const shoes = [
    {
        id: 1,
        name: "Nike",
        price: "$12/day",
        location: "Downtown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhJcrpgmWOC6V5YZ5PAvLZFy3FLfFWYB_pQ&s"
    },
    {
        id: 2,
        name: "Adidas",
        price: "$850/day",
        location: "Uptown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKArVOsCkg-oFKMMA3PYpotX0HHsWQhqGOQ&s"
    },
    {
        id: 3,
        name: "Air force 1",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGC-FAU0tnh7nm-pH1XoCJH7J5EdJ2ogw4g&s"
    }
];

const Shoes = ({ random }) => {
    const { addToCart } = useCart();

    const items = random ? [shoes[Math.floor(Math.random() * shoes.length)]] : shoes;

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Shoes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-72 hover:shadow-lg transition-shadow">
                        <img src={item.image} alt={item.name} className="w-56 h-36 object-cover rounded-md mb-3" />
                        <div className="text-lg font-semibold text-gray-700">{item.name}</div>
                        <div className="text-gray-500">{item.location}</div>
                        <div className="text-blue-600 font-bold mt-1">{item.price}</div>
                        <div className="flex gap-2 mt-3">
                            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View Details</button>
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

export default Shoes;
