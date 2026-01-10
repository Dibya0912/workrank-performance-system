import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ActivityFilter from "../components/ActivityFilter";
import { api } from "../services/api";

export default function AdminActivity() {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("all");

  const load = async () => {
    setLogs(await api.getActivityLogs());
  };

  useEffect(() => {
    load();
  }, []);

  const clearLogs = async () => {
    await api.clearActivityLogs();
    load();
  };

  const filtered =
    filter === "all"
      ? logs
      : logs.filter((l) => l.type === filter);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Activity Logs</h1>

          <div className="flex gap-2">
            <ActivityFilter value={filter} onChange={setFilter} />
            <button
              onClick={clearLogs}
              className="px-4 py-2 text-white bg-red-600 rounded"
            >
              Clear Logs
            </button>
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500">No activity found.</p>
        )}

        <div className="space-y-3">
          {filtered.map((log) => (
            <div
              key={log.id}
              className="p-4 bg-white rounded shadow"
            >
              <p className="font-medium">{log.message}</p>
              <p className="text-xs text-gray-500">
                {log.actor} • {log.type} • {log.time}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
