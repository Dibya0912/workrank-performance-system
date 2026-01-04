import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import { api } from "../services/api";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [filter, setFilter] = useState("all");

  const load = async () => {
    setTasks(await api.getTasks());
    setUsers(await api.getUsers());
  };

  useEffect(() => {
    load();
  }, []);

  const create = async () => {
    if (!title || !assignedTo) return;

    await api.createTask({
      title,
      description: "Created by admin",
      assignedTo: Number(assignedTo),
      priority: "medium",
      dueDate: "2025-01-25",
    });

    setTitle("");
    setAssignedTo("");
    load();
  };

  const update = async (id, status) => {
    await api.updateTaskStatus(id, status);
    load();
  };

  const remove = async (id) => {
    await api.deleteTask(id);
    load();
  };

  const filtered =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-4 text-3xl font-bold">Manage Tasks</h1>

        {/* CREATE */}
        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-64 p-2 border rounded"
            placeholder="Task title"
          />

          <select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Assign to</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>

          <button
            onClick={create}
            className="px-4 py-2 text-white bg-blue-600 rounded"
          >
            Add
          </button>
        </div>

        <TaskFilter value={filter} onChange={setFilter} />

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
