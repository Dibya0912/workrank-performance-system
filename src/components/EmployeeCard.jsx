export default function EmployeeCard({ employee }) {
  if (!employee) return null;

  return (
    <div className="p-5 transition bg-white shadow rounded-xl hover:shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800">
        {employee.name}
      </h3>

      <p className="text-sm text-gray-500">
        {employee.role} • {employee.department}
      </p>

      <div className="flex justify-between mt-3 text-sm">
        <span className="font-semibold text-blue-600">
          Performance: {employee.performance}%
        </span>
        <span className="text-gray-700">
          Rank #{employee.rank}
        </span>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Tasks Completed: {employee.tasksCompleted}
      </p>
    </div>
  );
}
