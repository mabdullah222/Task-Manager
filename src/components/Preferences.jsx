
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setLanguage } from '../features/preferencesSlice';

function Preferences() {
  const dispatch = useDispatch();
  const { theme, language } = useSelector((state) => state.preferences);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="flex space-x-4 items-center">

      <button
        onClick={handleThemeToggle}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

export default Preferences;
