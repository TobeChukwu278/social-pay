const Saved = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Saved Items</h1>
    <ul className="space-y-3">
      {[1, 2].map(id => (
        <li key={id} className="bg-white p-4 rounded shadow">
          <p className="font-semibold">Saved Product #{id}</p>
          <p className="text-sm text-gray-500">Category: Fashion | Price: $49.99</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Saved;