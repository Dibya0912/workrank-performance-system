import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";
import { api } from "../services/api";

export default function UserDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getUserPerformance().then(setData);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">User Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard title="Tasks Completed" value={data.completedTasks} />
          <MetricCard title="Performance Score" value={`${data.score}%`} />
          <MetricCard title="Rank" value="Calculated Live" />
        </div>

        <div className="mt-10">
          <Charts />
        </div>
      </main>
    </div>
  );
}
