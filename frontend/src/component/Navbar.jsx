import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-16 bg-black text-white flex items-center justify-between px-8 border-b border-gray-800 sticky top-0 z-50">

      {/* LEFT SECTION */}
      <div className="text-xl font-semibold">
        Movies Hub
      </div>

      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center bg-gray-900 px-4 py-2 rounded-lg w-[400px]">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <Bell className="cursor-pointer text-gray-400 hover:text-white" />

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
          <User size={18} />
        </div>
      </div>
    </div>
  );
}
