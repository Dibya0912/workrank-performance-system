import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Charts() {
  const { user } = useAuth();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (!user) return;

    api.getTasks().then((tasks) => {
      const userTasks = tasks.filter(
        (t) => t.assignedTo === user.id
      );

      const done = userTasks.filter(
        (t) => t.status === "done"
      ).length;

      setPoints([
        { label: "Completed Tasks", value: done * 10 },
        {
          label: "Pending Tasks",
          value: (userTasks.length - done) * 5,
        },
      ]);
    });
  }, [user]);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-lg font-semibold">
        Performance Overview
      </h2>

      <div className="space-y-3">
        {points.map((p) => (
          <div key={p.label}>
            <div className="flex justify-between text-sm">
              <span>{p.label}</span>
              <span>{p.value}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-600 rounded"
                style={{ width: `${p.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
