import { Truck, ReceiptText, Repeat } from 'lucide-react';

const orders = [
  {
    id: 101,
    date: '2025-06-12',
    status: 'Shipped',
    trackingId: 'TRK123456789',
    deliveryETA: '2025-06-15',
    items: [
      {
        name: 'Noise Cancelling Headphones',
        qty: 1,
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1616628182506-b2d2fd1b8b4a',
      },
    ],
    subtotal: 99.99,
    shipping: 5.99,
    total: 105.98,
  },
  {
    id: 102,
    date: '2025-06-10',
    status: 'Delivered',
    trackingId: 'TRK987654321',
    deliveryETA: '2025-06-13',
    items: [
      {
        name: 'Leather Wallet',
        qty: 2,
        price: 34.5,
        image: 'https://images.unsplash.com/photo-1606813902772-9bdf84aecc67',
      },
    ],
    subtotal: 69.0,
    shipping: 4.99,
    total: 73.99,
  },
];

const Orders = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">My Orders</h1>
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded shadow p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Order #{order.id}</h2>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                order.status === 'Delivered'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {order.status}
            </span>
          </div>

          <p className="text-sm text-gray-500">
            Ordered on: {order.date} | ETA: {order.deliveryETA}
          </p>

          {/* Items */}
          <div className="space-y-3">
            {order.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <img
                  src={`${item.image}?w=80&h=80&fit=crop`}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover border"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.qty} | Price: ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="text-sm text-gray-700">
            <p>Subtotal: ${order.subtotal.toFixed(2)}</p>
            <p>Shipping: ${order.shipping.toFixed(2)}</p>
            <p className="font-semibold text-black mt-1">
              Total: ${order.total.toFixed(2)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap pt-2">
            <button className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              <Truck size={16} /> Track Order
            </button>
            <button className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded">
              <ReceiptText size={16} /> View Invoice
            </button>
            <button className="flex items-center gap-1 text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded">
              <Repeat size={16} /> Reorder
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Orders;
