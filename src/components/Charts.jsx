import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Charts() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    api.getTasks().then((tasks) => {
      const done = tasks.filter(
        (t) => t.assignedTo === "user" && t.status === "done"
      ).length;

      // simple performance trend
      setPoints([
        { label: "Completed Tasks", value: done * 10 },
        { label: "Pending Tasks", value: (tasks.length - done) * 5 },
      ]);
    });
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-lg font-semibold">Performance Overview</h2>

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
