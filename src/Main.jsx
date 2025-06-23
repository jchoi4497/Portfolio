import Sidebar from "./Sidebar";
import Content from "./Content";
import DarkMode from "./DarkMode";
import ThemeToggle from "./ThemeToggle";

function Main() {
  return (
    <div className="relative font-open-sans bg-primary text-secondary dark:bg-blue-950 dark:text-white transition-colors duration-300">
      <div className="p-3 sm:block">
        {/* <DarkMode /> */}
        <ThemeToggle />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;