import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import { api } from "../services/api";

export default function UserTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const load = async () => {
    const all = await api.getTasks();
    setTasks(all.filter((t) => t.assignedTo === "user"));
  };

  useEffect(() => {
    load();
  }, []);

  const markDone = async (id) => {
    await api.updateTaskStatus(id, "done");
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
        <h1 className="mb-4 text-3xl font-bold">My Tasks</h1>

        <TaskFilter value={filter} onChange={setFilter} />

        <div className="grid gap-4">
          {filtered.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={markDone}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
