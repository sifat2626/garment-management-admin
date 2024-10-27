import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header";

function Root() {
  return (
    <div className="flex flex-row min-h-screen w-screen bg-neutral-100 overflow-hidden font-inter">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
