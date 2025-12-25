import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout, role } = useAuth();

  return (
    <aside className="w-64 p-6 text-white bg-gray-900">
      <h2 className="mb-8 text-2xl font-bold">WorkRank</h2>

      <nav className="space-y-4">
        {role === "user" && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/performance">My Performance</Link>
            <Link to="/rank">My Rank</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
          </>
        )}
      </nav>

      <button
        onClick={logout}
        className="w-full py-2 mt-10 text-white bg-red-600 rounded"
      >
        Logout
      </button>
    </aside>
  );
}
