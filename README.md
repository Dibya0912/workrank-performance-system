# 🏆 WorkRank Performance System

A role-based performance tracking and ranking dashboard built using **React + Vite + Tailwind CSS**.  
The system provides **users** with performance insights and **admins** with team-level analytics.

Designed with **industry-grade architecture**, clean routing, and scalable structure.

---

## 🚀 Key Features

### 👤 User Module
- Login as User
- Personal Dashboard
- Performance Metrics (Tasks, Score, Rank)
- Weekly Performance Chart
- Team Snapshot View
- Dedicated pages:
  - My Performance
  - My Rank

### 🛠 Admin Module
- Login as Admin
- Admin Dashboard
- System-wide Metrics
- Employee Overview
- Weekly Performance Analytics
- Employee Management Page

### 🔐 Authentication & Security
- Role-based authentication (User / Admin)
- Protected routes using `ProtectedRoute`
- Unauthorized access blocked
- Logout clears session and redirects safely
- Auth state managed using Context API

---

## 🧱 Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State | Context API |
| Auth | Role-based (Context + LocalStorage) |
| Charts | Custom reusable components |
| Version Control | Git & GitHub |

---

## 📁 Folder Structure

src/
├── assets/
├── components/
│ ├── Charts.jsx
│ ├── MetricCard.jsx
│ ├── EmployeeCard.jsx
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
│ └── MyRank.jsx
├── services/
│ └── api.js
├── App.jsx
├── main.jsx
└── index.css



---

## 🔁 Authentication Flow

1. User/Admin logs in from Login page
2. Role stored in Context
3. Role-based redirection:
   - User → `/user`
   - Admin → `/admin`
4. Routes protected using `ProtectedRoute`
5. Sidebar adapts based on role
6. Logout clears auth state and redirects to Login

---

## 📊 Current Progress (Day-wise)

### ✅ Day 1–3: Foundation
- Project setup using Vite
- Routing with React Router
- Login page
- Context-based auth
- Protected routes

### ✅ Day 4–5: Dashboard Architecture
- User & Admin dashboards separated
- Sidebar component
- Metric cards
- Charts component
- Logout & session handling

### ✅ Day 6–7: Role-Based Navigation
- Sidebar links differ for User/Admin
- Route-level role enforcement
- UI cleanup & refactor

### ✅ Day 8–9: Feature Expansion
- EmployeeCard component
- Employees page (Admin)
- My Performance page (User)
- My Rank page (User)
- Mock API service layer (`api.js`)
- Fully working role-based dashboards

---

## ▶️ Run Locally

```bash
npm install
npm run dev
