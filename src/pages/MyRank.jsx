import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function MyRank() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    api.getEmployees().then((emps) => {
      const ranked = emps
        .map((e) => ({
          ...e,
          score: e.tasksCompleted * 10,
        }))
        .sort((a, b) => b.score - a.score);

      setLeaders(ranked);
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Leaderboard</h1>

        <ol className="max-w-md space-y-2">
          {leaders.map((l, i) => (
            <li
              key={l.id}
              className="flex justify-between p-3 bg-white rounded shadow"
            >
              <span>
                #{i + 1} {l.name}
              </span>
              <span className="font-bold">{l.score}</span>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
