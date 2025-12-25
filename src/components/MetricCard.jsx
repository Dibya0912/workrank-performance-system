export default function MetricCard({ title, value }) {
  return (
    <div className="p-6 bg-surface rounded-xl shadow-card">
      <p className="text-sm text-muted">{title}</p>
      <h3 className="mt-2 text-2xl font-bold text-gray-800">
        {value}
      </h3>
    </div>
  );
}
