
const Settings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <div className="bg-white p-6 rounded shadow space-y-4 max-w-xl">
      <div>
        <label className="block font-medium mb-1">Language</label>
        <select className="w-full border p-2 rounded">
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Notifications</label>
        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" className="mr-2" defaultChecked /> Email Alerts
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> SMS Notifications
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Push Notifications
          </label>
        </div>
      </div>
      <div>
        <label className="block font-medium mb-1">Privacy Settings</label>
        <select className="w-full border p-2 rounded">
          <option>Public Profile</option>
          <option>Private Profile</option>
        </select>
      </div>
    </div>
  </div>
);

export default Settings;