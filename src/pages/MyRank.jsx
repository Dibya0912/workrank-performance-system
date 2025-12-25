import Sidebar from "../components/Sidebar";

export default function MyRank() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">My Rank</h1>

        <div className="max-w-xl p-6 bg-white shadow rounded-xl">
          <p className="text-xl font-semibold">
            Your Current Rank:
            <span className="ml-2 text-blue-600">#4</span>
          </p>

          <p className="mt-4 text-gray-600">
            You are performing better than 72% of the team.
          </p>

          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Leaderboard Preview</h3>
            <ol className="space-y-1">
              <li>🥇 Rahul — 92%</li>
              <li>🥈 Ankit — 89%</li>
              <li>🥉 Neha — 85%</li>
              <li className="font-bold text-blue-600">#4 You — 82%</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
