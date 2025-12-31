import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function MyPerformance() {
  const [perf, setPerf] = useState(null);

  useEffect(() => {
    api.getUserPerformance().then(setPerf);
  }, []);

  if (!perf) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">My Performance</h1>

        <div className="max-w-md p-6 bg-white rounded shadow">
          <p>✅ Tasks Completed: {perf.completedTasks}</p>
          <p>📈 Performance Score: {perf.score}%</p>
        </div>
      </main>
    </div>
  );
}
