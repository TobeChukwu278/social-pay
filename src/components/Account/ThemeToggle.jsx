import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="mb-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
          className="toggle toggle-sm"
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
      </label>
    </div>
  );
};

export default ThemeToggle;