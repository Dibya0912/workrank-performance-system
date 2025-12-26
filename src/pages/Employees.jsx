import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.getEmployees().then(setEmployees);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Employees
        </h1>

        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Department</th>
                <th className="p-3">Tasks</th>
                <th className="p-3">Performance</th>
                <th className="p-3">Rank</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">{emp.name}</td>
                  <td className="p-3">{emp.role}</td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.tasksCompleted}</td>
                  <td className="p-3">{emp.performance}%</td>
                  <td className="p-3">#{emp.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
