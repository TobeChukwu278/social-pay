
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', to: 'dashboard' },
  { name: 'My Listings', to: 'listings' },
  { name: 'Orders', to: 'orders' },
  { name: 'Messages', to: 'messages' },
  { name: 'Saved Items', to: 'saved' },
  { name: 'Billing', to: 'billing' },
  { name: 'Profile', to: 'profile' },
  { name: 'Password', to: 'password' },
  { name: 'Settings', to: 'settings' },
];

const AccountLinks = () => {
  return (
    <nav className="space-y-2">
      {navItems.map(({ name, to }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `block px-4 py-2 rounded font-medium transition ${
              isActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default AccountLinks;