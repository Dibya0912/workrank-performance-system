export default function MetricCard({ title, value, subtitle }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
