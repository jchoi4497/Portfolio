import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState("themeI");

  //update the theme on thml when the theme state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(prev => {
      if (prev === 'themeI') return "themeII";
      if (prev === 'themeII') return "themeIII";
      if (prev === 'themeIII') return "themeIV";
      return "themeI";
    });
  };

  return (
    <button
      onClick={handleThemeChange}
      className="flex px-6 py-4 mt-4 p-6 gap-2 bg-accent text-text text-outline rounded-full shadow-lg sm:absolute sm:top-5 sm:right-5 hover:scale-105 active:scale-100"
    >
      <span className="w-4 h-4 mt-1 rounded-full bg-primary border border-black shadow-xl"></span>
      <span className="w-4 h-4 mt-1 rounded-full bg-secondary border border-black shadow-xl"></span>
    </button>
  );
}