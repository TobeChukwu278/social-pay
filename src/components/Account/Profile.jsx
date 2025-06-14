const Profile = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
    <form className="space-y-5 max-w-3xl bg-white p-8 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          defaultValue="Prince Johnson"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          defaultValue="prince@market.com"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded"
          defaultValue="@prince001"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full border p-3 rounded"
          defaultValue="+234 801 234 5678"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded"
          defaultValue="Lagos, Nigeria"
        />
        <input
          type="text"
          placeholder="Business/Store Name"
          className="w-full border p-3 rounded"
          defaultValue="Prince Electronics"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Bio</label>
        <textarea
          placeholder="Tell us about yourself..."
          className="w-full border p-3 rounded"
          rows="4"
          defaultValue="Entrepreneur and digital trader specializing in electronics, mobile devices, and accessories."
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Account Type</label>
        <select className="w-full border p-3 rounded">
          <option>Buyer</option>
          <option selected>Seller</option>
          <option>Both</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Store Description</label>
        <textarea
          placeholder="Briefly describe your store, product categories, and service offerings"
          className="w-full border p-3 rounded"
          rows="3"
          defaultValue="We offer top-quality gadgets, accessories, and after-sale support. Fast delivery nationwide."
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Social Links</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="url"
            placeholder="Instagram Link"
            className="w-full border p-3 rounded"
            defaultValue="https://instagram.com/princeelectronics"
          />
          <input
            type="url"
            placeholder="Facebook Link"
            className="w-full border p-3 rounded"
            defaultValue="https://facebook.com/princeelectronics"
          />
          <input
            type="url"
            placeholder="Twitter Link"
            className="w-full border p-3 rounded"
          />
          <input
            type="url"
            placeholder="Website (optional)"
            className="w-full border p-3 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          className="w-full border p-2 rounded"
        />
      </div>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Save Changes
      </button>
    </form>
  </div>
);

export default Profile;
