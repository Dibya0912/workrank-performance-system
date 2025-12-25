import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="flex flex-col w-64 p-6 text-white bg-gray-900">
      <h2 className="mb-8 text-2xl font-bold">WorkRank</h2>

      <nav className="flex-1 space-y-4">
        <p className="opacity-80">Dashboard</p>

        {user.role === "admin" && (
          <>
            <p className="opacity-80">Manage Users</p>
            <p className="opacity-80">Reports</p>
          </>
        )}

        {user.role === "user" && (
          <>
            <p className="opacity-80">My Performance</p>
            <p className="opacity-80">My Rank</p>
          </>
        )}
      </nav>

      <button
        onClick={handleLogout}
        className="py-2 mt-6 transition bg-red-600 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
}
