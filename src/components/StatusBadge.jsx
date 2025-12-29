export default function StatusBadge({ status }) {
  const map = {
    pending: "bg-yellow-100 text-yellow-700",
    "in-progress": "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${map[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}
