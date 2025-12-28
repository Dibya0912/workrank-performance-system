import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import { api } from "../services/api";

export default function UserTasks() {
  const [tasks, setTasks] = useState([]);

  const load = () =>
    api.getTasks().then((all) =>
      setTasks(all.filter((t) => t.assignedTo === "user"))
    );

  useEffect(() => {
    load();
  }, []);

  const markDone = async (id) => {
    await api.updateTaskStatus(id, "done");
    load();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">My Tasks</h1>

        <div className="grid gap-4">
          {tasks.map((task) => (
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
