const Password = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Change Password</h1>
    <form className="space-y-4 max-w-md bg-white p-6 rounded shadow">
      <input type="password" placeholder="Current Password" className="w-full border p-2 rounded" />
      <input type="password" placeholder="New Password" className="w-full border p-2 rounded" />
      <input type="password" placeholder="Confirm New Password" className="w-full border p-2 rounded" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Password</button>
    </form>
  </div>
);

export default Password;