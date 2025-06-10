import React from 'react'

const clothes = [
    {
        id: 1,
        name: "T-shirt",
        price: "$18",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Dress",
        price: "$35",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Jacket",
        price: "$55",
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80"
    }
];

const Clothes = ({ random }) => {

    const items = random ? [clothes[Math.floor(Math.random() * clothes.length)]] : clothes

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Clothes</h2>
            <div className="flex flex-wrap gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-64 hover:shadow-lg transition-shadow">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-3" />
                        <div className="text-lg font-semibold text-gray-700">{item.name}</div>
                        <div className="text-blue-600 font-bold mt-1">{item.price}</div>
                        <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clothes