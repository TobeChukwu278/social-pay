import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the import path as needed

const vehicles = [
    {
        id: 1,
        name: "Rolls Royce",
        price: "$1,200/day",
        location: "Downtown",
        image: "https://pictures-nigeria.jijistatic.net/140708579_NjIwLTgyNy0zYTY3ZTFjMzc4.webp"
    },
    {
        id: 2,
        name: "Maybach",
        price: "$50/day",
        location: "Uptown",
        image: "https://www.carscoops.com/wp-content/uploads/2022/07/MANSORY-Maybach-S%E2%80%91Class-a.jpg"
    },
    {
        id: 3,
        name: "Tundra",
        price: "$180/day",
        location: "Suburbs",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2022_Toyota_Tundra_Limited_CrewMax_Short_Bed_4x4_with_TRD_Off-Road_Package%2C_front_left%2C_11-01-2022.jpg"
    },
    {
        id: 4,
        name: "Car Rentals Services",
        price: "$180/day",
        location: "Suburbs",
        image: "https://pictures-nigeria.jijistatic.net/108430392_NjIwLTQ2NS1kMTgxODUxNzM0LTE.webp"
    },
    {
        id: 5,
        name: "Taxi Hire",
        price: "$180/day",
        location: "Suburbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a4n_VjhrBL4d_jtUMO54pJ6_BuYZBKG8bA&s"
    },
    {
        id: 6,
        name: "Self-Drive Car Rental",
        price: "$180/day",
        location: "Suburbs",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=440,fit=crop/AE0oeK21lzSrpz2k/first-car-m5KwKBMwPGHW2p4v.JPG"
    }
];

const Vehicles = ({ random }) => {
    const { addToCart } = useCart();
    const items = random ? [vehicles[Math.floor(Math.random() * vehicles.length)]] : vehicles;

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Vehicles</h2>
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

export default Vehicles;
