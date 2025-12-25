import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MetricCard title="Total Employees" value="24" />
          <MetricCard title="Active Users" value="19" />
          <MetricCard title="Avg Performance" value="76%" />
        </div>

        <Charts />
      </main>
    </div>
  );
}
