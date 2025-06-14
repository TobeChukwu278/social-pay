import { Pencil, Pause, Trash2 } from 'lucide-react';

const listings = [
  {
    id: 1,
    name: 'Wireless Bluetooth Speaker',
    category: 'Electronics',
    status: 'Active',
    views: 24,
    price: 49.99,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1612550761230-e95cc2de7b0d',
  },
  {
    id: 2,
    name: 'Modern Office Chair',
    category: 'Furniture',
    status: 'Paused',
    views: 38,
    price: 129.99,
    stock: 3,
    image: 'https://images.unsplash.com/photo-1588854337110-918198eb41b5',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    category: 'Accessories',
    status: 'Active',
    views: 52,
    price: 89.0,
    stock: 7,
    image: 'https://images.unsplash.com/photo-1616628182506-b2d2fd1b8b4a',
  },
];

const Listings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">My Listings</h1>
    <ul className="space-y-5">
      {listings.map((item) => (
        <li key={item.id} className="bg-white rounded shadow p-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <img
            src={`${item.image}?w=100&h=100&fit=crop`}
            alt={item.name}
            className="w-24 h-24 object-cover rounded border"
          />
          <div className="flex-1 space-y-1">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">Category: {item.category}</p>
            <p className="text-sm text-gray-500">
              Status: 
              <span className={`ml-1 font-medium ${item.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                {item.status}
              </span> 
              | Views: {item.views}
            </p>
            <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)} | Stock: {item.stock} pcs</p>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
              <Pencil size={16} /> Edit
            </button>
            <button className="flex items-center gap-1 text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-1 rounded">
              <Pause size={16} /> {item.status === 'Active' ? 'Pause' : 'Resume'}
            </button>
            <button className="flex items-center gap-1 text-sm bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Listings;
