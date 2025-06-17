import Sidebar from "./Sidebar";
import Content from "./Content";
import DarkMode from "./DarkMode";

function Main() {
  return (
    <div className="relative font-roboto bg-sky-100 text-black dark:bg-blue-950 dark:text-white transition-colors duration-300">
      <div className="p-3 sm:block">
        <DarkMode />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;