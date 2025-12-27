import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.getTasks().then(setTasks);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">Manage Tasks</h1>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-white rounded shadow"
            >
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>

              <div className="flex gap-4 mt-2 text-sm">
                <span>Status: {task.status}</span>
                <span>Priority: {task.priority}</span>
                <span>Assigned: {task.assignedTo}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
