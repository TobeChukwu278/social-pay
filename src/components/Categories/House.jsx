import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the path based on your folder structure

const house = [
    {
        id: 1,
        name: "Modern Loft",
        price: "$1,200/mo",
        location: "Downtown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXllChKmCjVCyWFor2MAkuH21OsaYPGpGb6g&s"
    },
    {
        id: 2,
        name: "4 units of 2 bedroom flat",
        price: "$850/mo",
        location: "Uptown",
        image: "https://prestonhouseplans.com.ng/wp-content/uploads/2022/09/PSX_20220912_061215.jpg"
    },
    {
        id: 3,
        name: "Portable 2 bedroom",
        price: "$1,800/mo",
        location: "Suburbs",
        image: "https://houseplanng.com/wp-content/uploads/wp-realestate-uploads/_property_featured_image/2021/03/well-finished-2bedroom-hp1.jpg"
    }
];

const House = ({ random }) => {
    const { addToCart } = useCart();

    const items = random ? [house[Math.floor(Math.random() * house.length)]] : house;

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">House</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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

export default House;
