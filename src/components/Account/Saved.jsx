import { useState } from 'react';
import { Star } from 'lucide-react';

const initialSavedItems = [
  {
    id: 1,
    name: "Men’s Leather Sneakers",
    price: 59.99,
    originalPrice: 79.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1580714894202-c849f1a41d59", // sneakers
    inStock: true,
    rating: 4.5,
    seller: "UrbanWear",
    tags: ["Free Shipping", "Best Seller"],
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: null,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1616628182506-b2d2fd1b8b4a", // headphones
    inStock: false,
    rating: 4.2,
    seller: "SoundX Pro",
    tags: ["Limited Stock"],
  },
];

const Saved = () => {
  const [savedItems, setSavedItems] = useState(initialSavedItems);

  const handleRemove = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item);
    // Integrate with cart logic here
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Saved Items</h1>

      {savedItems.length === 0 ? (
        <p className="text-gray-600">You haven't saved any items yet.</p>
      ) : (
        <ul className="space-y-6">
          {savedItems.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center gap-4"
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=120&h=120&q=80`}
                alt={item.name}
                className="w-28 h-28 object-cover rounded"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Category: {item.category} | Seller: {item.seller}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(item.rating) ? 'fill-current' : 'stroke-current'
                      }
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">({item.rating})</span>
                </div>

                <p
                  className={`text-sm mt-1 ${
                    item.inStock ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {item.inStock ? 'In Stock' : 'Currently Out of Stock'}
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className={`px-4 py-2 text-sm rounded ${
                      item.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                    Move to Wishlist
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Saved;
