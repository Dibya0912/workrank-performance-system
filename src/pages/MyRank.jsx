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

  if (!leaders.length) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Leaderboard</h1>

        <ol className="max-w-lg space-y-3">
          {leaders.map((u) => (
            <li
              key={u.id}
              className={`flex justify-between p-3 rounded ${
                u.id === user.id
                  ? "bg-blue-100 font-bold"
                  : "bg-white"
              }`}
            >
              <span>
                #{u.rank} {u.name}
              </span>
              <span>{u.score} pts</span>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
