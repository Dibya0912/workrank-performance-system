export default function ActivityFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="all">All Activities</option>
      <option value="CREATE_TASK">Task Created</option>
      <option value="UPDATE_TASK">Task Updated</option>
      <option value="DELETE_TASK">Task Deleted</option>
    </select>
  );
}
