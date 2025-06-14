const Orders = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Orders</h1>
    <div className="space-y-4">
      {[101, 102].map(id => (
        <div key={id} className="bg-white p-4 rounded shadow">
          <p className="font-semibold">Order #{id}</p>
          <p className="text-sm text-gray-500">Status: Shipped | Date: 2025-06-12</p>
        </div>
      ))}
    </div>
  </div>
);

export default Orders;