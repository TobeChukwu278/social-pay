import { useState } from 'react';

const Listings = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      price: 59.99,
      status: 'Active',
      views: 25,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155227c994?auto=format&fit=crop&w=800&q=80',
      tags: ['audio', 'wireless', 'bluetooth']
    },
    {
      id: 2,
      title: 'Gaming Mouse RGB',
      category: 'Accessories',
      price: 29.99,
      status: 'Active',
      views: 40,
      image: 'https://images.unsplash.com/photo-1616594039964-885413061f1b?auto=format&fit=crop&w=800&q=80',
      tags: ['gaming', 'rgb', 'mouse']
    }
  ]);

  const [newListing, setNewListing] = useState({
    title: '',
    category: '',
    price: '',
    imageFile: null,
    imagePreview: '',
    tags: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setNewListing((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: previewURL
    }));
  };

  const handleAddListing = () => {
    const { title, category, price, imageFile, tags } = newListing;

    if (!title || !category || !price || !imageFile) {
      alert('Please fill out all fields including image.');
      return;
    }

    const newId = listings.length > 0 ? Math.max(...listings.map(l => l.id)) + 1 : 1;

    const newItem = {
      id: newId,
      title,
      category,
      price: parseFloat(price),
      image: newListing.imagePreview, // for now we're using the preview as display
      tags: tags.split(',').map(tag => tag.trim()),
      views: 0,
      status: 'Active'
    };

    setListings([newItem, ...listings]);

    setNewListing({
      title: '',
      category: '',
      price: '',
      imageFile: null,
      imagePreview: '',
      tags: ''
    });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this listing?');
    if (confirmed) {
      setListings(listings.filter(l => l.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Listings</h1>

      {/* Create New Listing */}
      <div className="bg-white p-6 rounded shadow mb-8 space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Create New Listing</h2>

        <input
          name="title"
          type="text"
          placeholder="Product Title"
          className="w-full border p-2 rounded"
          value={newListing.title}
          onChange={handleInputChange}
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          className="w-full border p-2 rounded"
          value={newListing.category}
          onChange={handleInputChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price ($)"
          className="w-full border p-2 rounded"
          value={newListing.price}
          onChange={handleInputChange}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border p-2 rounded"
          onChange={handleImageUpload}
        />
        {newListing.imagePreview && (
          <img
            src={newListing.imagePreview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded"
          />
        )}

        <input
          name="tags"
          type="text"
          placeholder="Tags (comma-separated)"
          className="w-full border p-2 rounded"
          value={newListing.tags}
          onChange={handleInputChange}
        />

        <button
          onClick={handleAddListing}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Add Listing
        </button>
      </div>

      {/* Listings */}
      <ul className="space-y-6">
        {listings.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded shadow flex items-start gap-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-600">{item.status}</span> | Views: {item.views}
              </p>
              <p className="text-sm text-gray-400">Tags: {item.tags.join(', ')}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
