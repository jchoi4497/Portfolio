import Sidebar from "./Sidebar";
import Content from "./Content";

function Main() {
  return (
    <div className="half:flex h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;