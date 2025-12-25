import Sidebar from "../components/Sidebar";

export default function MyPerformance() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">My Performance</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-lg font-semibold">Weekly Summary</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ Tasks Completed: 18</li>
              <li>📈 Performance Score: 82%</li>
              <li>⏱ Avg Focus Time: 6.2 hrs</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-lg font-semibold">Strengths</h2>
            <ul className="mt-4 space-y-2">
              <li>✔ Consistent task completion</li>
              <li>✔ Improved focus time</li>
              <li>✔ Team collaboration</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
