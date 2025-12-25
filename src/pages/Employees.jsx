import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import EmployeeCard from "../components/EmployeeCard";
import { api } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    api.getEmployees().then(setEmployees);
  }, []);

  if (!employees) {
    return <p className="p-6">Loading employees...</p>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Employees
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </main>
    </div>
  );
}
