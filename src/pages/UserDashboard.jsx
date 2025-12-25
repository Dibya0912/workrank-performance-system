import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";
import EmployeeCard from "../components/EmployeeCard";
import { api } from "../services/api";

export default function UserDashboard() {
  const [metrics, setMetrics] = useState(null);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    api.getUserMetrics().then(setMetrics);
    api.getEmployees().then(setTeam);
  }, []);

  if (!metrics) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">User Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard title="Tasks Completed" value={metrics.tasksCompleted} />
          <MetricCard title="Performance" value={`${metrics.performance}%`} />
          <MetricCard title="Rank" value={`#${metrics.rank}`} />
        </div>

        <div className="mt-10">
          <Charts />
        </div>

        <h2 className="mt-10 mb-4 text-xl font-semibold">
          Team Snapshot
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {team.slice(0, 3).map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </main>
    </div>
  );
}
