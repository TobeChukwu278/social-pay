import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
  <div className="space-y-6">
    <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Active Listings</h2>
        <p className="text-gray-600 mt-2">5 products currently listed for sale.</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Pending Orders</h2>
        <p className="text-gray-600 mt-2">2 pending orders awaiting confirmation.</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Messages</h2>
        <p className="text-gray-600 mt-2">3 unread buyer inquiries.</p>
      </div>
    </section>

    <section className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Weekly Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  </div>
);

export default DashBoard;