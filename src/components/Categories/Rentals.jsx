import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust path if CartContext is in a different location

const rentals = [
    {
        id: 1,
        name: "Matrix 10' x 20' Canopy Tent ",
        price: "$1,200/day",
        location: "Downtown",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2cHYlidA6KLljdSyyhso88Ugh2NRjU2uwQ&s"
    },
    {
        id: 2,
        name: "Canopies - 15' Wide ",
        price: "$850/day",
        location: "Uptown",
        image: "https://www.avparty.com/wp-content/uploads/2016/03/15-Canopies.jpg"
    },
    {
        id: 3,
        name: "White Folding Padded Chair Rentals",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwn7H3N_iZV2vnkm5Axbme1dwQbZn75Kf4rg&s"
    },
    {
        id: 4,
        name: "Padded Stacking Chair Rentals ",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://atlaspartyrentals.com/wp-content/uploads/2023/08/PaddedStackingChairRentals-1.png"
    },
    {
        id: 5,
        name: "Affordable Tables & Chairs Rentals",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://images.squarespace-cdn.com/content/v1/61c2a9a15f19d94fdbb2bac6/aa74a323-504c-4b2f-b37c-a9037831ce26/dove-party-rentals-image-main.jpg"
    },
    {
        id: 6,
        name: "Cooking Pots Rentals",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://naijamart.com/storage/file_upload/downloads/66349494c5073Screenshot_20240313-1104092-1.jpg"
    },
    {
        id: 7,
        name: "Cooking Utensils Rentals",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://naijamart.com/storage/file_upload/downloads/6634949532a32Screenshot_20240313-1058522-1.jpg"
    },
    {
        id: 8,
        name: "Industrial pot",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxLf1FRYSq5GMvPg3T9wiPPd1mgpLE9Xi3Q&s"
    }
];

const Rentals = ({ random }) => {
    const { addToCart } = useCart();

    const items = random ? [rentals[Math.floor(Math.random() * rentals.length)]] : rentals;

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Rentals</h2>
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

export default Rentals;
