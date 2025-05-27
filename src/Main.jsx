import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

function Main() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };


  return (
    <div className="font-roboto bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">

      <button
        onClick={toggleDarkMode}
        className="fixed top-10 right-10 p-6 rounded-full border-2 dark:border-white border-black"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>



      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;