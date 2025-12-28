# 🏆 WorkRank Performance System

A role-based performance tracking and ranking dashboard built using  
**React + Vite + Tailwind CSS**.

The system provides:
- **Users** → personal performance insights & task tracking  
- **Admins** → team-level analytics, employee overview & task management  

Built with **industry-grade architecture**, clean routing, role-based access control,
and a scalable component structure following a **30-day roadmap**.

---

## 🚀 Key Features

### 👤 User Module
- Login as User
- Personal Dashboard
- KPI Metrics:
  - Tasks Completed
  - Performance %
  - Rank
- Weekly Performance Chart
- Team Snapshot
- Dedicated Pages:
  - My Tasks
  - My Performance
  - My Rank

### 🛠 Admin Module
- Login as Admin
- Admin Dashboard
- System-wide KPIs
- Weekly Performance Analytics
- Employee Overview
- Employee Management Page
- Task Management:
  - Create tasks
  - Assign tasks
  - Update task status
  - Delete tasks

### 🔐 Authentication & Security
- Role-based authentication (User / Admin)
- Protected routes using `ProtectedRoute`
- Unauthorized access blocked
- Sidebar adapts dynamically by role
- Logout clears session and redirects safely
- Auth state managed using Context API

---

## 🧱 Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State Management | Context API |
| Authentication | Role-based (Context + LocalStorage) |
| Charts | Reusable custom components |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

src/
├── assets/
├── components/
│ ├── Charts.jsx
│ ├── MetricCard.jsx
│ ├── EmployeeCard.jsx
│ ├── TaskCard.jsx
│ ├── Sidebar.jsx
│ └── ProtectedRoute.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Login.jsx
│ ├── UserDashboard.jsx
│ ├── AdminDashboard.jsx
│ ├── Employees.jsx
│ ├── MyPerformance.jsx
│ ├── MyRank.jsx
│ ├── UserTasks.jsx
│ └── AdminTasks.jsx
├── services/
│ └── api.js
├── App.jsx
├── main.jsx
└── index.css


---

## 🔁 Authentication Flow

1. User/Admin logs in from Login page
2. Role stored in Context (persisted in memory)
3. Role-based redirection:
   - User → `/user`
   - Admin → `/admin`
4. Routes protected using `ProtectedRoute`
5. Sidebar navigation adapts based on role
6. Logout clears auth state and redirects to Login

---

## 📊 Development Progress (Day-wise)

### ✅ Day 1–3: Foundation
- Vite + React project setup
- React Router integration
- Login page
- Context-based authentication
- Protected routing system

### ✅ Day 4–5: Dashboard Architecture
- Separate User & Admin dashboards
- Sidebar layout
- KPI Metric cards
- Charts component
- Logout & session handling
- UI refactor for clean structure

### ✅ Day 6–7: Role-Based Navigation
- Sidebar links based on role
- Strict role enforcement on routes
- Code cleanup & component reuse

### ✅ Day 8–9: Feature Expansion
- EmployeeCard component
- Employees page (Admin)
- My Performance page (User)
- My Rank page (User)
- Mock API service layer (`api.js`)
- Fully working role-based dashboards

### ✅ Day 10: Tasks Module
- User Tasks page
- Admin Tasks page
- TaskCard reusable component
- Role-based task visibility
- Clean separation of User vs Admin task views
- Routing & export/import stability fixes

### ✅ Day 11: Task CRUD & Status Flow (CURRENT)
- Centralized task state in API layer
- Admin can:
  - Create tasks
  - Update task status
  - Delete tasks
- User can:
  - View assigned tasks
  - Mark tasks as completed
- Reusable `TaskCard` with role-based actions
- Fully interactive task system (no dummy buttons)

---

## ▶️ Run Locally

```bash
npm install
npm run dev
