import Sidebar from "./Sidebar";
import Content from "./Content";
import DarkMode from "./DarkMode";

function Main() {
  return (
    <div className="font-roboto bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <DarkMode />
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;