import StatusBadge from "./StatusBadge";

export default function TaskCard({ task, onStatusChange, onDelete, admin }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <StatusBadge status={task.status} />
      </div>

      <p className="mt-1 text-sm text-gray-600">{task.description}</p>

      <p className="mt-2 text-xs text-gray-500">
        Priority: {task.priority} | Due: {task.dueDate}
      </p>

      <div className="flex gap-2 mt-4">
        {!admin && task.status !== "done" && (
          <button
            onClick={() => onStatusChange(task.id, "done")}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded"
          >
            Mark Done
          </button>
        )}

        {admin && (
          <>
            <button
              onClick={() => onStatusChange(task.id, "done")}
              className="px-3 py-1 text-sm text-white bg-blue-600 rounded"
            >
              Complete
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 text-sm text-white bg-red-600 rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
