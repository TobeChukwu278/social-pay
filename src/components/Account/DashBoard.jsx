import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Mon', Sales: 5 },
  { name: 'Tue', Sales: 7 },
  { name: 'Wed', Sales: 3 },
  { name: 'Thu', Sales: 6 },
  { name: 'Fri', Sales: 9 },
  { name: 'Sat', Sales: 4 },
  { name: 'Sun', Sales: 8 },
];

const DashBoard = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-bold">Seller Dashboard</h1>

    {/* KPIs */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700">Active Listings</h2>
        <p className="text-3xl font-bold mt-2">5</p>
        <p className="text-sm text-gray-500 mt-1">Products currently live</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700">Pending Orders</h2>
        <p className="text-3xl font-bold mt-2">2</p>
        <p className="text-sm text-gray-500 mt-1">Awaiting your confirmation</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700">Unread Messages</h2>
        <p className="text-3xl font-bold mt-2">3</p>
        <p className="text-sm text-gray-500 mt-1">Inquiries from buyers</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700">Total Earnings</h2>
        <p className="text-3xl font-bold mt-2">$1,248</p>
        <p className="text-sm text-gray-500 mt-1">This month</p>
      </div>
    </section>

    {/* Weekly Sales Chart */}
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Weekly Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-3">
        You’ve seen a <span className="text-green-600 font-semibold">+12%</span> increase in sales compared to last week.
      </p>
    </section>

    {/* Additional Insights */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top Products */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-sm text-gray-700">
            <span>Wireless Headphones</span>
            <span className="font-medium">$420</span>
          </li>
          <li className="flex justify-between text-sm text-gray-700">
            <span>Smart Watch</span>
            <span className="font-medium">$312</span>
          </li>
          <li className="flex justify-between text-sm text-gray-700">
            <span>Laptop Bag</span>
            <span className="font-medium">$198</span>
          </li>
        </ul>
      </div>

      {/* Inventory Alert */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Inventory Alerts</h2>
        <ul className="space-y-2 text-sm">
          <li className="text-red-600">⚠️ USB-C Charger – Only 2 left in stock</li>
          <li className="text-yellow-600">⚠️ Phone Case – Running low</li>
          <li className="text-green-600">✅ Mouse Pad – Stock healthy</li>
        </ul>
      </div>
    </section>
  </div>
);

export default DashBoard;
