import React from 'react';
import { useParams } from 'react-router-dom';
import { accessories } from './Categories/Accessories';

const ProductDetails = () => {
    const { id } = useParams();
    const item = accessories.find(p => p.id === parseInt(id));
    const similar = item.filter(p => p.category === item.category && p.id !== item.id);

    if (!item) return <div>Product not found.</div>;

    return (
        <div className="max-w-3xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
            <img src={item.image} alt={item.name} className="w-64 h-64 object-cover mb-4" />
            <div className="mb-4">{item.description}</div>
            <div className="text-blue-600 font-bold mb-8">{item.price}</div>
            <h2 className="text-2xl font-semibold mb-2">Similar Products</h2>
            <div className="grid grid-cols-2 gap-4">
                {similar.map(sim => (
                    <Link to={`/item/${sim.id}`} key={sim.id} className="block bg-white p-2 rounded shadow hover:shadow-lg">
                        <img src={sim.image} alt={sim.name} className="w-24 h-24 object-cover mb-2" />
                        <div className="font-semibold">{sim.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;