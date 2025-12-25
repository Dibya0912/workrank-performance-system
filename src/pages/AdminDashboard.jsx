import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";
import EmployeeCard from "../components/EmployeeCard";
import { api } from "../services/api";

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.getAdminMetrics().then(setMetrics);
    api.getEmployees().then(setEmployees);
  }, []);

  if (!metrics) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard title="Total Employees" value={metrics.totalEmployees} />
          <MetricCard title="Active Users" value={metrics.activeUsers} />
          <MetricCard title="Avg Performance" value={`${metrics.avgPerformance}%`} />
        </div>

        <div className="mt-10">
          <Charts admin />
        </div>

        <h2 className="mt-10 mb-4 text-xl font-semibold">
          All Employees
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} admin />
          ))}
        </div>
      </main>
    </div>
  );
}
