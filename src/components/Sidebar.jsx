import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <aside className="w-64 min-h-screen p-6 text-white bg-gray-900">
      <h2 className="mb-8 text-2xl font-bold">WorkRank</h2>

      <nav className="space-y-4">
        {user.role === "user" && (
          <>
            <Link className="block hover:text-blue-400" to="/user">
              Dashboard
            </Link>
            <Link className="block hover:text-blue-400" to="/user/tasks">
              My Tasks
            </Link>
            <Link className="block hover:text-blue-400" to="/user/performance">
              My Performance
            </Link>
            <Link className="block hover:text-blue-400" to="/user/rank">
              My Rank
            </Link>
          </>
        )}

        {user.role === "admin" && (
          <>
            <Link className="block hover:text-blue-400" to="/admin">
              Dashboard
            </Link>
            <Link className="block hover:text-blue-400" to="/admin/tasks">
              Manage Tasks
            </Link>
            <Link className="block hover:text-blue-400" to="/admin/employees">
              Employees
            </Link>
          </>
        )}
      </nav>

      <button
        onClick={handleLogout}
        className="w-full py-2 mt-10 text-white bg-red-600 rounded"
      >
        Logout
      </button>
    </aside>
  );
}
