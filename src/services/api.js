// src/services/api.js
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* ================= USERS ================= */
const users = [
  { id: 1, name: "You", role: "user" },
  { id: 2, name: "Rahul", role: "user" },
  { id: 3, name: "Anjali", role: "user" },
];

/* ================= TASKS ================= */
let tasks = [
  {
    id: 1,
    title: "Fix Login Bug",
    description: "Resolve role-based redirect issue",
    assignedTo: "user",
    status: "done",
    priority: "high",
    dueDate: "2025-01-20",
  },
  {
    id: 2,
    title: "Improve Dashboard UI",
    description: "Refactor dashboard layout",
    assignedTo: "user",
    status: "pending",
    priority: "medium",
    dueDate: "2025-01-22",
  },
];

/* ================= HELPERS ================= */
const completedCount = () =>
  tasks.filter((t) => t.assignedTo === "user" && t.status === "done").length;

const calcScore = () => completedCount() * 10;

/* ================= API ================= */
export const api = {
  /* ===== EMPLOYEES ===== */
  async getEmployees() {
    await delay(200);
    return users.map((u) => ({
      ...u,
      tasksCompleted: completedCount(),
      performance: calcScore(),
    }));
  },

  /* ===== TASKS ===== */
  async getTasks() {
    await delay(200);
    return [...tasks];
  },

  async createTask(task) {
    await delay(200);
    const newTask = {
      ...task,
      id: Date.now(),
      status: "pending",
    };
    tasks.push(newTask);
    return newTask;
  },

  async updateTaskStatus(id, status) {
    await delay(200);
    tasks = tasks.map((t) =>
      t.id === id ? { ...t, status } : t
    );
  },

  async deleteTask(id) {
    await delay(200);
    tasks = tasks.filter((t) => t.id !== id);
  },

  /* ===== ADMIN DASHBOARD ===== */
  async getAdminMetrics() {
    await delay(200);
    return {
      totalEmployees: users.length,
      totalTasks: tasks.length,
      completedTasks: tasks.filter((t) => t.status === "done").length,
    };
  },

  /* ===== USER DASHBOARD ===== */
  async getUserPerformance() {
    await delay(200);
    const completedTasks = completedCount();

    return {
      completedTasks,
      score: completedTasks * 10,
    };
  },

  /* ===== LEADERBOARD (🔥 FIX FOR MY RANK) ===== */
  async getLeaderboard() {
    await delay(200);

    return users.map((u, index) => ({
      id: u.id,
      name: u.name,
      score: calcScore(),
      rank: index + 1,
    }));
  },
};
