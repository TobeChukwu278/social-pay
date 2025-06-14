const Messages = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Messages</h1>
    <ul className="space-y-3">
      {['buyer@example.com', 'seller@example.com'].map(email => (
        <li key={email} className="bg-white p-4 rounded shadow">
          <p className="font-semibold">Conversation with {email}</p>
          <p className="text-sm text-gray-500">Last message: "Is this still available?"</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Messages;