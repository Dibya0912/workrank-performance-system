import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import { api } from "../services/api";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // LOAD ALL TASKS
  const load = async () => {
    const all = await api.getTasks();
    setTasks(all);
  };

  useEffect(() => {
    load();
  }, []);

  // CREATE TASK (ASSIGNED TO USER ID = 1)
  const create = async () => {
    if (!title.trim()) return;

    await api.createTask({
      title,
      description: "Created by admin",
      assignedTo: 1, // ✅ USER ID (DAY 16 LOGIC)
      priority: "medium",
      dueDate: "2025-01-25",
    });

    setTitle("");
    load();
  };

  // UPDATE STATUS
  const update = async (id, status) => {
    await api.updateTaskStatus(id, status);
    load();
  };

  // DELETE TASK
  const remove = async (id) => {
    await api.deleteTask(id);
    load();
  };

  // FILTER TASKS
  const filtered =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-4 text-3xl font-bold">Manage Tasks</h1>

        {/* CREATE TASK */}
        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-64 p-2 border rounded"
            placeholder="New task title"
          />
          <button
            onClick={create}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        {/* FILTER */}
        <TaskFilter value={filter} onChange={setFilter} />

        {/* TASK LIST */}
        <div className="grid gap-4">
          {filtered.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              admin
              onStatusChange={update}
              onDelete={remove}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
