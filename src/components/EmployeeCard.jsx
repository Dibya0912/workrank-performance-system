export default function EmployeeCard({ employee }) {
  return (
    <div className="p-5 bg-white rounded shadow">
      <h3 className="font-bold">{employee.name}</h3>
      <p>Department: {employee.department}</p>
      <p>Completed: {employee.tasksCompleted}</p>
      <p>Pending: {employee.tasksPending}</p>
      <p>Performance: {employee.performance}%</p>
      <p>Rank #{employee.rank}</p>
    </div>
  );
}
