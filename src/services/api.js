// src/services/api.js

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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

export const api = {
  async getUserMetrics() {
    await delay(500);
    return {
      tasksCompleted: 18,
      performance: 82,
      rank: 4,
    };
  },

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

  // ✅ THIS WAS MISSING
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
};
