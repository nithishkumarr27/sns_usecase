import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar (small on left) */}
      <aside className="w-56 bg-gray-100 border-r p-4">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-600">Categories</li>
          <li className="cursor-pointer hover:text-blue-600">Settings</li>
        </ul>
      </aside>

      {/* Main Content (fills the rest) */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
