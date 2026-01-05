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
    assignedTo: 1,
    status: "done",
    priority: "high",
    dueDate: "2025-01-20",
  },
];

/* ================= ACTIVITY LOGS (🔥 DAY 19) ================= */
let activities = [];

/* ================= HELPERS ================= */
const userTasks = (userId) =>
  tasks.filter((t) => t.assignedTo === userId);

const completedCount = (userId) =>
  userTasks(userId).filter((t) => t.status === "done").length;

const calcScore = (userId) => completedCount(userId) * 10;

const logActivity = (message) => {
  activities.unshift({
    id: Date.now(),
    message,
    time: new Date().toLocaleString(),
  });
};

/* ================= API ================= */
export const api = {
  async getUsers() {
    await delay(200);
    return [...users];
  },

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
    logActivity(`Admin created task "${task.title}"`);
    return newTask;
  },

  async updateTaskStatus(id, status) {
    await delay(200);
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.status = status;
      logActivity(`Task "${task.title}" marked as ${status}`);
    }
  },

  async deleteTask(id) {
    await delay(200);
    const task = tasks.find((t) => t.id === id);
    tasks = tasks.filter((t) => t.id !== id);
    if (task) {
      logActivity(`Admin deleted task "${task.title}"`);
    }
  },

  async getUserPerformance(userId) {
    await delay(200);
    return {
      completedTasks: completedCount(userId),
      score: calcScore(userId),
    };
  },

  async getEmployees() {
    await delay(200);
    return users.map((u) => ({
      ...u,
      tasksCompleted: completedCount(u.id),
      performance: calcScore(u.id),
    }));
  },

  async getAdminMetrics() {
    await delay(200);
    return {
      totalEmployees: users.length,
      totalTasks: tasks.length,
      completedTasks: tasks.filter((t) => t.status === "done").length,
    };
  },

  async getLeaderboard() {
    await delay(200);
    return users
      .map((u) => ({
        id: u.id,
        name: u.name,
        score: calcScore(u.id),
      }))
      .sort((a, b) => b.score - a.score)
      .map((u, i) => ({ ...u, rank: i + 1 }));
  },

  /* 🔥 DAY 19 */
  async getActivityLogs() {
    await delay(200);
    return [...activities];
  },
};
