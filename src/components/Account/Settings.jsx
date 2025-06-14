import { useState } from 'react';

const Settings = () => {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('NGN - Nigerian Naira');
  const [theme, setTheme] = useState('System Default');
  const [privacy, setPrivacy] = useState('Public Profile');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    promo: true,
  });
  const [security, setSecurity] = useState({
    twoFA: false,
    sessionTimeout: '15 mins',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Simulate save
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

      <div className="bg-white p-6 rounded shadow space-y-6 max-w-2xl">

        {/* Language */}
        <div>
          <label className="block font-medium mb-1">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>

        {/* Currency */}
        <div>
          <label className="block font-medium mb-1">Preferred Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>NGN - Nigerian Naira</option>
            <option>USD - US Dollar</option>
            <option>EUR - Euro</option>
            <option>GBP - British Pound</option>
          </select>
        </div>

        {/* Theme */}
        <div>
          <label className="block font-medium mb-1">Display Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>System Default</option>
            <option>Light Mode</option>
            <option>Dark Mode</option>
          </select>
        </div>

        {/* Privacy */}
        <div>
          <label className="block font-medium mb-1">Privacy Settings</label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Public Profile</option>
            <option>Private Profile</option>
            <option>Only Connections</option>
          </select>
        </div>

        {/* Notifications */}
        <div>
          <label className="block font-medium mb-1">Notification Preferences</label>
          <div className="space-y-2">
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={notifications.email}
                onChange={() =>
                  setNotifications({ ...notifications, email: !notifications.email })
                }
              />
              Email Alerts
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={notifications.sms}
                onChange={() =>
                  setNotifications({ ...notifications, sms: !notifications.sms })
                }
              />
              SMS Notifications
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={notifications.push}
                onChange={() =>
                  setNotifications({ ...notifications, push: !notifications.push })
                }
              />
              Push Notifications
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={notifications.promo}
                onChange={() =>
                  setNotifications({ ...notifications, promo: !notifications.promo })
                }
              />
              Receive Promotions & Offers
            </label>
          </div>
        </div>

        {/* Security */}
        <div>
          <label className="block font-medium mb-1">Security Options</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={security.twoFA}
                onChange={() =>
                  setSecurity({ ...security, twoFA: !security.twoFA })
                }
              />
              Enable Two-Factor Authentication (2FA)
            </label>
            <div>
              <label className="block mb-1">Auto-Logout After Inactivity</label>
              <select
                value={security.sessionTimeout}
                onChange={(e) =>
                  setSecurity({ ...security, sessionTimeout: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option>5 mins</option>
                <option>15 mins</option>
                <option>30 mins</option>
                <option>Never</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded"
          >
            Save Settings
          </button>
          {saved && <p className="text-green-600 text-sm">Settings saved successfully!</p>}
        </div>

        {/* Danger Zone */}
        <div className="pt-6 border-t">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
          <button className="text-red-600 hover:underline">Deactivate My Account</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
