export default function TaskFilter({ value, onChange }) {
  const filters = ["all", "pending", "in-progress", "done"];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded text-sm ${
            value === f
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
