import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full">
        <Navbar />
        <Outlet />
      </div>

    </div>
  );
}

export default App;
