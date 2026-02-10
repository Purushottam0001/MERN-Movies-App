import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Film,
  TrendingUp,
  User,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      icon: <Home size={20} />,
      path: "/",
    },
    {
      name: "Browse Movies",
      icon: <Film size={20} />,
      path: "/movies",
    },
    {
      name: "Top Movies",
      icon: <TrendingUp size={20} />,
      path: "/top",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];

  return (
    <div className="w-64 h-screen bg-black text-white fixed left-0 top-0 border-r border-gray-800">

      {/* LOGO */}
      <div className="p-6 text-2xl font-bold tracking-wide">
        🎬 MoviesHub
      </div>

      {/* MENU */}
      <div className="mt-6 flex flex-col gap-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
              ${
                location.pathname === item.path
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="absolute bottom-6 left-0 w-full px-4">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:bg-gray-900 hover:text-white transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
