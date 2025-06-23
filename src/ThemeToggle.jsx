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
      return "themeI";
    });
  };

  return (
    <button
      onClick={handleThemeChange}
      className="bg-accent text-primary px-4 py-2 mt-4 p-6 rounded-full border-2 border-accent sm:absolute sm:top-5 sm:right-5"
    >
      Switch Theme
    </button>
  );
}