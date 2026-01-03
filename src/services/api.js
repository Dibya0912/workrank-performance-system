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
  {
    id: 2,
    title: "Improve Dashboard UI",
    description: "Refactor dashboard layout",
    assignedTo: 1,
    status: "pending",
    priority: "medium",
    dueDate: "2025-01-22",
  },
  {
    id: 3,
    title: "Create Wireframes",
    description: "Initial UI planning",
    assignedTo: 2,
    status: "done",
    priority: "medium",
    dueDate: "2025-01-18",
  },
];

/* ================= HELPERS ================= */
const userTasks = (userId) =>
  tasks.filter((t) => t.assignedTo === userId);

const completedCount = (userId) =>
  userTasks(userId).filter((t) => t.status === "done").length;

const calcScore = (userId) => completedCount(userId) * 10;

/* ================= API ================= */
export const api = {
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

  async getUserPerformance(userId) {
    await delay(200);
    const completedTasks = completedCount(userId);
    return {
      completedTasks,
      score: completedTasks * 10,
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
      .map((u, index) => ({
        ...u,
        rank: index + 1,
      }));
  },
};
