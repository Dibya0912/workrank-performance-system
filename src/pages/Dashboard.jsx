import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-background">
      
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-surface shadow-card">
        <h2 className="text-2xl font-bold text-primary">WorkRank</h2>

        <nav className="mt-8 space-y-4 text-muted">
          <p className="font-medium text-primary">Dashboard</p>
          <p>Activity</p>
          <p>Reports</p>
          <p>Teams</p>
        </nav>

        <button
          onClick={logout}
          className="mt-10 text-sm text-red-500"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard ({user.role})
          </h1>
          <p className="mt-1 text-muted">
            Performance insights overview
          </p>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MetricCard title="Daily Focus" value="03:32 hrs" />
          <MetricCard title="Utilization" value="101%" />
          <MetricCard title="Core Work" value="48%" />
        </section>
      </main>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="p-6 bg-surface rounded-xl shadow-card">
      <p className="text-sm text-muted">{title}</p>
      <h3 className="mt-2 text-2xl font-bold text-gray-800">
        {value}
      </h3>
    </div>
  );
}
