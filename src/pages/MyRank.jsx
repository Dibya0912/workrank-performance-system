import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function MyRank() {
  const { user } = useAuth();
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    api.getLeaderboard().then(setLeaders);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Leaderboard</h1>

        {leaders.map((u) => (
          <div
            key={u.id}
            className={`p-3 rounded mb-2 ${
              u.id === user.id ? "bg-blue-200 font-bold" : "bg-white"
            }`}
          >
            #{u.rank} {u.name} – {u.score} pts
          </div>
        ))}
      </main>
    </div>
  );
}
