const Listings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">My Listings</h1>
    <ul className="space-y-4">
      {[1, 2, 3].map(i => (
        <li key={i} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Product #{i}</h2>
          <p className="text-sm text-gray-600">Category: Electronics</p>
          <p className="text-sm text-gray-500">Status: Active | Views: {i * 10}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Listings;