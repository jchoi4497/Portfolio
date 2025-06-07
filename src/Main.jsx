import Sidebar from "./Sidebar";
import Content from "./Content";
import DarkMode from "./DarkMode";

function Main() {
  return (
    <div className="relative font-roboto bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="p-4 sm:block flex justify-between items-center">
        <DarkMode />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;