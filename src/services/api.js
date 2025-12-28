// src/services/api.js
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* ================= EMPLOYEES ================= */
const employees = [
  { id: 1, name: "Rahul Sharma", role: "Developer" },
  { id: 2, name: "Anjali Verma", role: "Designer" },
  { id: 3, name: "Amit Singh", role: "Manager" },
];

/* ================= TASKS (IN-MEMORY DB) ================= */
let tasks = [
  {
    id: 1,
    title: "Fix Login Bug",
    description: "Resolve role-based redirect issue",
    assignedTo: "user",
    status: "pending",
    priority: "high",
    dueDate: "2025-01-20",
  },
  {
    id: 2,
    title: "Improve Dashboard UI",
    description: "Refactor admin dashboard layout",
    assignedTo: "admin",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-01-18",
  },
];

/* ================= API ================= */
export const api = {
  /* ===== DASHBOARD ===== */
  async getUserMetrics() {
    await delay(300);
    return { tasksCompleted: 18, performance: 82, rank: 4 };
  },

  async getAdminMetrics() {
    await delay(300);
    return { totalEmployees: employees.length, activeUsers: 19, avgPerformance: 76 };
  },

  async getEmployees() {
    await delay(300);
    return employees;
  },

  async getChartData() {
    await delay(300);
    return [
      { day: "Mon", score: 40 },
      { day: "Tue", score: 60 },
      { day: "Wed", score: 55 },
      { day: "Thu", score: 70 },
      { day: "Fri", score: 85 },
    ];
  },

  /* ===== TASKS CRUD ===== */
  async getTasks() {
    await delay(300);
    return [...tasks];
  },

  async createTask(task) {
    await delay(300);
    const newTask = {
      ...task,
      id: Date.now(),
      status: "pending",
    };
    tasks.push(newTask);
    return newTask;
  },

  async updateTaskStatus(id, status) {
    await delay(300);
    tasks = tasks.map((t) =>
      t.id === id ? { ...t, status } : t
    );
    return true;
  },

  async deleteTask(id) {
    await delay(300);
    tasks = tasks.filter((t) => t.id !== id);
    return true;
  },
};
