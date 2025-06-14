const Billing = () => (
  <div className="max-w-4xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6">Billing & Subscription</h1>

    <div className="bg-white p-6 rounded shadow space-y-8">
      
      {/* Subscription Plan */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Current Subscription</h2>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="font-medium text-blue-600">Premium Seller Plan</p>
            <p className="text-sm text-gray-600">NGN 5,000 / month (Billed Monthly)</p>
            <p className="text-sm text-gray-500">Next Billing Date: <strong>2025-07-01</strong></p>
            <p className="text-sm text-gray-500">Status: <span className="text-green-600 font-medium">Active</span></p>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 hover:underline">Change Plan</button>
            <button className="text-red-600 hover:underline">Cancel Subscription</button>
          </div>
        </div>
      </section>

      {/* Auto Renew */}
      <section>
        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Auto-Renew Subscription</span>
        </label>
      </section>

      {/* Wallet / Credits */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Wallet & Credit Balance</h2>
        <p className="text-gray-700">Current Wallet Balance: <span className="font-semibold">NGN 2,000</span></p>
        <button className="mt-2 text-blue-600 hover:underline">Top Up Wallet</button>
      </section>

      {/* Payment Method */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="font-medium">Visa ending in **** 4242</p>
            <p className="text-sm text-gray-500">Expires: 09/26</p>
          </div>
          <button className="text-blue-600 hover:underline">Update Card</button>
        </div>
      </section>

      {/* Billing Address */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
        <p className="text-gray-700">Prince Johnson</p>
        <p className="text-gray-700">45 Allen Avenue, Ikeja</p>
        <p className="text-gray-700">Lagos, Nigeria</p>
        <button className="mt-2 text-blue-600 hover:underline">Edit Address</button>
      </section>

      {/* Tax Info */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tax Information</h2>
        <p className="text-gray-700">Business Name: <strong>Prince Tech Ltd</strong></p>
        <p className="text-gray-700">TIN: <strong>0234567890</strong></p>
        <p className="text-gray-500 text-sm">Used for invoice generation and VAT compliance.</p>
        <button className="mt-2 text-blue-600 hover:underline">Update Tax Info</button>
      </section>

      {/* Invoice History */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Invoice History</h2>
        <table className="w-full text-sm border-t">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-right">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: '2025-06-01', amount: 'NGN 5,000', status: 'Paid' },
              { date: '2025-05-01', amount: 'NGN 5,000', status: 'Paid' },
              { date: '2025-04-01', amount: 'NGN 5,000', status: 'Paid' },
            ].map((inv, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{inv.date}</td>
                <td className="p-2">{inv.amount}</td>
                <td className="p-2">
                  <span className={`font-medium ${inv.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-2 text-right">
                  <a href="#" className="text-blue-600 hover:underline">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  </div>
);

export default Billing;
