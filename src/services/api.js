const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* ================= USERS ================= */
const users = [
  { id: 1, name: "You", role: "user", department: "Frontend" },
  { id: 2, name: "Rahul", role: "user", department: "Backend" },
  { id: 3, name: "Anjali", role: "user", department: "UI/UX" },
];

/* ================= STORAGE HELPERS ================= */
const load = (key, fallback) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* ================= TASKS ================= */
let tasks = load("workrank_tasks", [
  {
    id: 1,
    title: "Fix Login Bug",
    description: "Resolve role-based redirect issue",
    assignedTo: 1,
    status: "done",
    priority: "high",
    dueDate: "2025-01-20",
  },
]);

/* ================= ACTIVITIES ================= */
let activities = load("workrank_activities", []);

/* ================= HELPERS ================= */
const userTasks = (userId) =>
  tasks.filter((t) => t.assignedTo === userId);

const completedCount = (userId) =>
  userTasks(userId).filter((t) => t.status === "done").length;

const pendingCount = (userId) =>
  userTasks(userId).filter((t) => t.status === "pending").length;

const calcScore = (userId) => completedCount(userId) * 10;

const logActivity = ({ type, message }) => {
  activities.unshift({
    id: Date.now(),
    type,
    actor: "Admin",
    message,
    time: new Date().toLocaleString(),
  });
  save("workrank_activities", activities);
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
    const newTask = { ...task, id: Date.now(), status: "pending" };
    tasks.push(newTask);
    save("workrank_tasks", tasks);

    logActivity({
      type: "CREATE_TASK",
      message: `Created task "${task.title}"`,
    });

    return newTask;
  },

  async updateTaskStatus(id, status) {
    await delay(200);
    tasks = tasks.map((t) =>
      t.id === id ? { ...t, status } : t
    );
    save("workrank_tasks", tasks);

    const task = tasks.find((t) => t.id === id);
    if (task) {
      logActivity({
        type: "UPDATE_TASK",
        message: `Updated "${task.title}" → ${status}`,
      });
    }
  },

  async deleteTask(id) {
    await delay(200);
    const task = tasks.find((t) => t.id === id);
    tasks = tasks.filter((t) => t.id !== id);
    save("workrank_tasks", tasks);

    if (task) {
      logActivity({
        type: "DELETE_TASK",
        message: `Deleted "${task.title}"`,
      });
    }
  },

  async getUserPerformance(userId) {
    await delay(200);
    return {
      completedTasks: completedCount(userId),
      pendingTasks: pendingCount(userId),
      score: calcScore(userId),
    };
  },

  async getEmployees() {
    await delay(200);

    const leaderboard = users
      .map((u) => ({
        ...u,
        tasksCompleted: completedCount(u.id),
        tasksPending: pendingCount(u.id),
        performance: calcScore(u.id),
      }))
      .sort((a, b) => b.performance - a.performance)
      .map((u, i) => ({ ...u, rank: i + 1 }));

    return leaderboard;
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

  async getActivityLogs() {
    await delay(200);
    return [...activities];
  },

  async clearActivityLogs() {
    await delay(200);
    activities = [];
    save("workrank_activities", []);
  },
};
