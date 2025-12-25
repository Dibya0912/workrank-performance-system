import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          User Dashboard
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MetricCard title="Tasks Completed" value="18" />
          <MetricCard title="Performance Score" value="82%" />
          <MetricCard title="Current Rank" value="#4" />
        </div>

        <Charts />
      </main>
    </div>
  );
}
