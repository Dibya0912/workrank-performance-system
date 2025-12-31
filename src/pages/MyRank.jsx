import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function MyRank() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    api.getLeaderboard().then(setLeaders);
  }, []);

  if (!leaders.length) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">My Rank</h1>

        <div className="max-w-lg p-6 bg-white rounded shadow">
          <ol className="space-y-3">
            {leaders.map((u, i) => (
              <li
                key={u.id}
                className={`flex justify-between p-3 rounded ${
                  i === 0 ? "bg-blue-100 font-bold" : "bg-gray-50"
                }`}
              >
                <span>
                  #{i + 1} {u.name}
                </span>
                <span>{u.score} pts</span>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}
