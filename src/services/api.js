// src/services/api.js

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* ================= EMPLOYEES ================= */
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Developer",
    department: "Engineering",
    performance: 82,
    tasksCompleted: 18,
    rank: 4,
  },
  {
    id: 2,
    name: "Anjali Verma",
    role: "Designer",
    department: "UI/UX",
    performance: 90,
    tasksCompleted: 24,
    rank: 1,
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Manager",
    department: "Operations",
    performance: 75,
    tasksCompleted: 12,
    rank: 6,
  },
];

/* ================= TASKS ================= */
const tasks = [
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
    status: "completed",
    priority: "medium",
    dueDate: "2025-01-18",
  },
  {
    id: 3,
    title: "Performance Calculation",
    description: "Prepare logic for performance scoring",
    assignedTo: "user",
    status: "pending",
    priority: "high",
    dueDate: "2025-01-22",
  },
];

export const api = {
  /* ===== USER ===== */
  async getUserMetrics() {
    await delay(500);
    return {
      tasksCompleted: 18,
      performance: 82,
      rank: 4,
    };
  },

  /* ===== ADMIN ===== */
  async getAdminMetrics() {
    await delay(500);
    return {
      totalEmployees: employees.length,
      activeUsers: 19,
      avgPerformance: 76,
    };
  },

  async getEmployees() {
    await delay(500);
    return employees;
  },

  /* ===== CHART ===== */
  async getChartData() {
    await delay(500);
    return [
      { day: "Mon", score: 40 },
      { day: "Tue", score: 60 },
      { day: "Wed", score: 55 },
      { day: "Thu", score: 70 },
      { day: "Fri", score: 85 },
    ];
  },

  /* ===== TASKS (DAY 10 CORE) ===== */
  async getTasks() {
    await delay(500);
    return tasks;
  },
};
