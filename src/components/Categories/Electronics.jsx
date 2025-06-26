import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the path if necessary

const electronics = [
    {
        id: 1,
        name: "wireless devices",
        price: "$1,200/day",
        location: "Downtown",
        image: "https://img.freepik.com/premium-photo/display-various-wireless-devices-table_1177649-3306.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 2,
        name: "Oraimo headphones; wireless",
        price: "$850/day",
        location: "Uptown",
        image: "https://img.freepik.com/premium-psd/headphones-isolated-transparent-background_1189562-90072.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 3,
        name: "Samsung laptops",
        price: "$1,800/day",
        location: "Suburbs",
        image: "https://img.freepik.com/premium-photo/department-computers-electronics-store-choosing-laptop-store_245974-2708.jpg?ga=GA1.1.158449253.1743635955&semt=ais_hybrid&w=740"
    },
    {
        id: 4,
        name: "4K Ultra HD Action Camera",
        price: "$150",
        image: "https://m.media-amazon.com/images/I/61w6L6bQFGL._AC_SL1500_.jpg"
    },
    {
        id: 5,
        name: "Wireless Charging Pad",
        price: "$25",
        image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2208/gallery/levant-wireless-charger-pad-ep-p2400-ep-p2400bbegww-533678755?$650_519_PNG$"
    },
    {
        id: 6,
        name: "Noise Cancelling Earbuds",
        price: "$60",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000"
    },
    {
        id: 7,
        name: "Smart Home Security Camera",
        price: "$99",
        image: "https://cdn.thewirecutter.com/wp-content/media/2022/06/securitycameras-2048px-03288.jpg"
    },
    {
        id: 8,
        name: "USB-C Fast Charger",
        price: "$18",
        image: "https://m.media-amazon.com/images/I/51pQK4U5QDL._AC_SL1500_.jpg"
    },
    {
        id: 9,
        name: "Wireless Keyboard and Mouse Combo",
        price: "$40",
        image: "https://m.media-amazon.com/images/I/71kQbQESuSL._AC_SL1500_.jpg"
    },
    {
        id: 10,
        name: "HDMI Streaming Device",
        price: "$55",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407036_sd.jpg"
    },
    {
        id: 11,
        name: "Smart Fitness Watch",
        price: "$85",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAX2_VW_34FR+watch-44-alum-silver-nc-6s_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599010368000"
    },
    {
        id: 12,
        name: "Portable Bluetooth Speaker",
        price: "$45",
        image: "https://m.media-amazon.com/images/I/71z3kpMAYsL._AC_SL1500_.jpg"
    },
    {
        id: 13,
        name: "Wireless Bluetooth Headphones",
        price: "$120",
        image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg"
    }
];


function getRandomItems(arr, count) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const Electronics = ({ random, randomCount = 4 }) => {
    const { addToCart } = useCart();

    const items = random ? getRandomItems(electronics, randomCount) : electronics;

    return (
        <div className="py-6 px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Electronics</h2>
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

export default Electronics;
