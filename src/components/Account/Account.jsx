import { Outlet } from 'react-router-dom';
import AccountLinks from './AccountLinks';

const Account = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside className="w-full md:w-64 bg-white shadow-md p-4 md:p-6">
        <AccountLinks />
      </aside>
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Account;