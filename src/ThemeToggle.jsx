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
      className="bg-accent text-text px-4 py-2 mt-4 p-6 rounded-full shadow-lg sm:absolute sm:top-5 sm:right-5 hover:scale-105 active:scale-100"
    >
      Switch Theme
    </button>
  );
}