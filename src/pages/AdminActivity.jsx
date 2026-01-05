// src/pages/AdminActivity.jsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function AdminActivity() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.getActivityLogs().then(setLogs);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Activity Logs</h1>

        <div className="space-y-3">
          {logs.map((log) => (
            <div
              key={log.id}
              className="p-4 text-sm bg-white rounded shadow"
            >
              <p>{log.message}</p>
              <span className="text-xs text-gray-500">
                {log.time}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
