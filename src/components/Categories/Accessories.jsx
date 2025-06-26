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
        image: "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_640.jpg"
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
        name: "Apple Watch",
        price: "$28",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7cwkPLsQvRlrLbFoCnqBbcHyJL1wf-LOsQ&s"
    },
    {
        id: 10,
        name: "STAC Fine Jewellery",
        price: "$45",
        image: "https://www.stacfinejewellery.com/cdn/shop/articles/blog_cover_images_3_ebf510f5-9b25-47a9-b0bf-ec73cfdcd24d_700x.png?v=1650040513"
    },
    {
        id: 11,
        name: "Electronic Gadgets",
        price: "$22",
        image: "https://static.vecteezy.com/system/resources/previews/056/654/427/non_2x/mockup-showcases-collection-of-tech-gadgets-designed-in-isometric-view-featuring-stylish-headphones-sleek-power-bank-and-modern-smartphone-all-ready-for-branding-and-customization-photo.jpeg"
    },
    {
        id: 12,
        name: "Gadget accessories",
        price: "$55",
        image: "https://c8.alamy.com/comp/R68K0H/gadgets-and-accessories-isolated-on-white-background-R68K0H.jpg"
    },
    {
        id: 13,
        name: "Phone Accessories ",
        price: "$18",
        image: "https://t3.ftcdn.net/jpg/02/73/31/68/360_F_273316816_N9164vXl3NTl1W50Z3o2ocQmtjBAAPOO.jpg"
    },
    {
        id: 14,
        name: "Bluetooth Earbuds",
        price: "$65",
        image: "https://lcdn.altex.ro/media/catalog/product/a/i/airpods_4_1_09508b1d.jpg"
    },
    {
        id: 15,
        name: "Canvas Messenger Bag",
        price: "$38",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaaFcHVUwxuuzuX8nFBvUMr7Zr6uSAM_a0Q&s"
    },
    {
        id: 16,
        name: "Classic Aviator Sunglasses",
        price: "$30",
        image: "https://static.eyerim.com/content/images/product/main-redesign/32003.jpg"
    },
    {
        id: 17,
        name: "Elegant Pearl Necklace",
        price: "$80",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kBgagsZ3ejNymZt5o0MfnsAGQWhfPiC1-w&s"
    }
];


function getRandomItems(arr, count) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const Accessories = ({ random, randomCount = 4 }) => {
    const { addToCart } = useCart();
    const [expandedId, setExpandedId] = useState(null);

    const items = random ? getRandomItems(accessories, randomCount) : accessories;

    return (
        <div className="py-6 px-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {items.map(item => (

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
                        <div className="flex gap-2 mt-3">
                            <Link to={`/product/${item.id}`}>
                                <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View</button>
                            </Link>
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

export default Accessories;