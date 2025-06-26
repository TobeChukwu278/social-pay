import React from 'react';
import { useCart } from '../Cart/CartContext'; // Make sure the path is correct

const apartments = [
    {
        id: 1,
        name: "1 bedroom",
        price: "$12/day",
        location: "Downtown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiv-arH-ltNVA8wtaO5kCf-NKik3izl_zSUg&s"
    },
    {
        id: 2,
        name: "2 bedroom Flat",
        price: "$850/day",
        location: "Uptown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mfrjD5ghLYGCkUIvgOSd6ECFJNaAyuoivw&s"
    },
    {
        id: 3,
        name: "Semi Self-Contained Apartment",
        price: "$18/day",
        location: "Suburbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DfE6jD_ZN8X9mVuJ6oUmzRO5nSkJvbwPqbTGKbM0v2zsKQQSq3t0jAuPbl6YhR1YBe8&usqp=CAU"
    }
];

const Apartments = ({ random }) => {
    const { addToCart } = useCart(); // Hook from CartContext

    const items = random ? [apartments[Math.floor(Math.random() * apartments.length)]] : apartments;

    return (
        <div className="py-6 px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Apartments</h2>
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

export default Apartments;
