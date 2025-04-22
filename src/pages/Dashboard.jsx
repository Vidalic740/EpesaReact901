// src/pages/Dashboard.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen w-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-md hidden md:block">
        <div className="p-6 text-xl font-semibold border-b">Dashboard</div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard/home" className="block p-2 rounded hover:bg-gray-200">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/category" className="block p-2 rounded hover:bg-gray-200">Category Management</Link>
            </li>
            <li>
              <Link to="#" className="block p-2 rounded hover:bg-gray-200">Reports</Link>
            </li>
            <li>
              <Link to="#" className="block p-2 rounded hover:bg-gray-200">Settings</Link>
            </li>
            <li>
              <Link to="/login" className="block p-2 rounded hover:bg-gray-200">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-gray-500 shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Welcome back to the Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
        </header>

        {/* Main Area */}
        <main className="p-6 flex-1">
          {/* Render the Category component when selected */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
