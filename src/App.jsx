
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FilterComponent from './components/FilterComponent';
import Preferences from './components/Preferences';
import Auth from './components/Auth';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const theme = useSelector((state) => state.preferences.theme);
  
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <Preferences />
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Auth />
        {isLoggedIn && (
          <>
            <TaskForm />
            <FilterComponent />
            <TaskList />
          </>
        )}
      </main>
      <footer className={`bg-white dark:bg-gray-800 shadow mt-8 ${isLoggedIn ? "sticky" : "fixed"} bottom-0 w-full`}>
        <div className="container mx-auto p-4 text-center">
          © {new Date().getFullYear()} Task Manager App
        </div>
      </footer>
    </div>
  );
}

export default App;
