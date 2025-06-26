import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

export const accessories = [
    {
        id: 1,
        name: "Elegant Brown Leather Oxford Shoes A Stylish Footwear Choice",
        price: "$25",
        image: "https://img.freepik.com/free-psd/elegant-brown-leather-oxford-shoes-stylish-footwear-choice_191095-86336.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 2,
        name: "Sunglasses",
        price: "$40",
        image: "https://img.freepik.com/free-photo/glasses-with-slightly-rounded-frame_23-2150670736.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 3,
        name: "Wrist Watch",
        price: "$120",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Stylish Black Canvas Weekender Travel Duffle Bag",
        price: "$60",
        image: "https://img.freepik.com/free-psd/stylish-black-canvas-weekender-travel-duffle-bag_191095-83295.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 5,
        name: "Model career kit still life",
        price: "$60",
        image: "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229754.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 6,
        name: "Elegante blaue Saphir- und Goldohrrringe",
        price: "$60",
        image: "https://img.freepik.com/free-psd/elegant-blue-sapphire-gold-earrings_191095-83122.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 7,
        name: "Travel equipment still life mockup",
        price: "$60",
        image: "https://img.freepik.com/premium-photo/table-top-view-accessories-fashion-men-travel-with-technology-concept-essential-item-teenage-adult-gentlemen-travel-trip-holidays-mix-object-modern-rustic-wooden_1921-598.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },

    {
        id: 8,
        name: "Classic Leather Wallet",
        price: "$35",
        image: "https://img.freepik.com/free-photo/leather-wallet_1203-7482.jpg?w=740"
    },
    {
        id: 9,
        name: "Minimalist Silver Bracelet",
        price: "$28",
        image: "https://img.freepik.com/free-photo/silver-bracelet_1203-7483.jpg?w=740"
    },
    {
        id: 10,
        name: "Vintage Fedora Hat",
        price: "$45",
        image: "https://img.freepik.com/free-photo/fedora-hat_1203-7484.jpg?w=740"
    },
    {
        id: 11,
        name: "Elegant Silk Scarf",
        price: "$22",
        image: "https://img.freepik.com/free-photo/silk-scarf_1203-7485.jpg?w=740"
    },
    {
        id: 12,
        name: "Luxury Gold Cufflinks",
        price: "$55",
        image: "https://img.freepik.com/free-photo/gold-cufflinks_1203-7486.jpg?w=740"
    },
    {
        id: 13,
        name: "Travel Toiletry Bag",
        price: "$18",
        image: "https://img.freepik.com/free-photo/toiletry-bag_1203-7487.jpg?w=740"
    },
    {
        id: 14,
        name: "Bluetooth Earbuds",
        price: "$65",
        image: "https://img.freepik.com/free-photo/bluetooth-earbuds_1203-7488.jpg?w=740"
    },
    {
        id: 15,
        name: "Canvas Messenger Bag",
        price: "$38",
        image: "https://img.freepik.com/free-photo/messenger-bag_1203-7489.jpg?w=740"
    },
    {
        id: 16,
        name: "Classic Aviator Sunglasses",
        price: "$30",
        image: "https://img.freepik.com/free-photo/aviator-sunglasses_1203-7490.jpg?w=740"
    },
    {
        id: 17,
        name: "Elegant Pearl Necklace",
        price: "$80",
        image: "https://img.freepik.com/free-photo/pearl-necklace_1203-7491.jpg?w=740"
    }
];

const Accessories = ({ random }) => {
    const { addToCart } = useCart();
    const [expandedId, setExpandedId] = useState(null);

    const items = random ? [accessories[Math.floor(Math.random() * accessories.length)]] : accessories;

    return (
        <div className="py-6 px-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {items.map(item => (
                    <Link to={`/product/${item.id}`}>
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-64 h-80 hover:shadow-lg transition-shadow"
                        >
                            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-3" />
                            <div
                                className={`text-lg font-semibold text-gray-700 text-center w-full cursor-pointer ${expandedId === item.id ? '' : 'truncate'}`}
                                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                title={expandedId === item.id ? '' : item.name}
                            >
                                {item.name}
                            </div>
                            <div className="text-blue-600 font-bold mt-1">{item.price}</div>
                            <button
                                onClick={() => addToCart(item)}
                                className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Accessories;