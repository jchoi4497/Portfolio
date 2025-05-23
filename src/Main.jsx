import Sidebar from "./Sidebar";
import Content from "./Content";

function Main() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;