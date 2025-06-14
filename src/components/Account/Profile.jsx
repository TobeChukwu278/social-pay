const Profile = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
    <form className="space-y-4 max-w-md bg-white p-6 rounded shadow">
      <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" defaultValue="Prince Johnson" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded" defaultValue="prince@market.com" />
      <input type="text" placeholder="Username" className="w-full border p-2 rounded" defaultValue="@prince001" />
      <input type="text" placeholder="Phone" className="w-full border p-2 rounded" defaultValue="+234 801 234 5678" />
      <input type="text" placeholder="Location" className="w-full border p-2 rounded" defaultValue="Lagos, Nigeria" />
      <textarea placeholder="Bio" className="w-full border p-2 rounded" defaultValue="Entrepreneur and digital trader"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
    </form>
  </div>
);

export default Profile;