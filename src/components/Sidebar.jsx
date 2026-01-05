// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="w-64 min-h-screen p-4 text-white bg-slate-900">
      <h1 className="mb-6 text-2xl font-bold">WorkRank</h1>

      <nav className="space-y-2">
        {user.role === "user" && (
          <>
            <NavLink to="/user" className="block p-2 rounded hover:bg-slate-700">
              Dashboard
            </NavLink>
            <NavLink to="/user/tasks" className="block p-2 rounded hover:bg-slate-700">
              My Tasks
            </NavLink>
            <NavLink to="/user/performance" className="block p-2 rounded hover:bg-slate-700">
              My Performance
            </NavLink>
            <NavLink to="/user/rank" className="block p-2 rounded hover:bg-slate-700">
              My Rank
            </NavLink>
          </>
        )}

        {user.role === "admin" && (
          <>
            <NavLink to="/admin" className="block p-2 rounded hover:bg-slate-700">
              Dashboard
            </NavLink>
            <NavLink to="/admin/tasks" className="block p-2 rounded hover:bg-slate-700">
              Manage Tasks
            </NavLink>
            <NavLink to="/admin/employees" className="block p-2 rounded hover:bg-slate-700">
              Employees
            </NavLink>

            {/* 🔥 DAY 19 */}
            <NavLink to="/admin/activity" className="block p-2 rounded hover:bg-slate-700">
              Activity Logs
            </NavLink>
          </>
        )}
      </nav>

      <button
        onClick={logout}
        className="w-full p-2 mt-10 text-white bg-red-600 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
}
