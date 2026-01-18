import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";
import EmployeeCard from "../components/EmployeeCard";
import { api } from "../services/api";

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([]);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    api.getEmployees().then(setEmployees);
    api.getAdminMetrics().then(setMetrics);
  }, []);

  if (!metrics) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard title="Employees" value={metrics.totalEmployees} />
          <MetricCard title="Total Tasks" value={metrics.totalTasks} />
          <MetricCard title="Completed Tasks" value={metrics.completedTasks} />
        </div>

        <div className="mt-10">
          <Charts admin />
        </div>

        <h2 className="mt-10 mb-4 text-xl font-semibold">Employees</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </main>
    </div>
  );
}
