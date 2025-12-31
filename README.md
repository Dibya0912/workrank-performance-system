🏆 WorkRank Performance System

A role-based performance tracking and ranking dashboard built using
React + Vite + Tailwind CSS.

The system is designed to simulate a real-world corporate performance platform where:

Users track tasks, performance, and rank

Admins monitor employees, analytics, and manage tasks

Built with industry-grade architecture, clean routing, strict role-based access control, and a scalable component structure following a 30-day roadmap.

🚀 Key Features
👤 User Module

Secure login as User

Personal dashboard

KPI Metrics:

Tasks Completed

Performance %

Live Rank

Performance overview chart

Team snapshot

Dedicated pages:

My Tasks (with filters & status updates)

My Performance

My Rank (live leaderboard)

🛠 Admin Module

Secure login as Admin

Admin dashboard

System-wide KPIs:

Total employees

Total tasks

Completed tasks

Performance overview analytics

Employee overview cards

Employee management page

Full task management:

Create tasks

Assign tasks

Update task status

Delete tasks

🔐 Authentication & Security

Role-based authentication (User / Admin)

Protected routes using ProtectedRoute

Unauthorized access blocked

Sidebar navigation adapts dynamically by role

Logout clears session and redirects safely

Authentication handled using Context API

🧱 Tech Stack
Layer	Technology
Frontend	React (Vite)
Styling	Tailwind CSS
Routing	React Router DOM
State Management	Context API
Authentication	Role-based (Context)
Charts	Custom reusable components
Version Control	Git & GitHub
📁 Project Structure
src/
├── assets/
├── components/
│   ├── Charts.jsx
│   ├── MetricCard.jsx
│   ├── EmployeeCard.jsx
│   ├── TaskCard.jsx
│   ├── TaskFilter.jsx
│   ├── StatusBadge.jsx
│   ├── Sidebar.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Login.jsx
│   ├── UserDashboard.jsx
│   ├── AdminDashboard.jsx
│   ├── Employees.jsx
│   ├── MyPerformance.jsx
│   ├── MyRank.jsx
│   ├── UserTasks.jsx
│   └── AdminTasks.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css

🔁 Authentication Flow

User/Admin logs in from Login page

Role stored in Context

Role-based redirection:

User → /user

Admin → /admin

Routes protected using ProtectedRoute

Sidebar adapts automatically based on role

Logout clears auth state and redirects to Login

📊 Development Progress (Day-wise)
✅ Day 1–3: Foundation

Vite + React project setup

React Router integration

Login page

Context-based authentication

Protected routing system

✅ Day 4–5: Dashboard Architecture

Separate User & Admin dashboards

Sidebar layout

KPI metric cards

Charts component

Logout & session handling

UI refactor for clean structure

✅ Day 6–7: Role-Based Navigation

Sidebar links based on role

Strict role enforcement on routes

Code cleanup & component reuse

✅ Day 8–9: Feature Expansion

EmployeeCard component

Employees page (Admin)

My Performance page (User)

My Rank page (User)

Mock API service layer (api.js)

Fully working role-based dashboards

✅ Day 10: Tasks Module

User Tasks page

Admin Tasks page

TaskCard reusable component

Role-based task visibility

Clean separation of User vs Admin task views

Routing & export/import stability fixes

✅ Day 11: Task CRUD & Status Flow

Centralized task state in API layer

Admin capabilities:

Create tasks

Update task status

Delete tasks

User capabilities:

View assigned tasks

Mark tasks as completed

Fully interactive task system (no dummy buttons)

✅ Day 12: Filters, Status Badges & Leaderboard

Task filtering (All / Pending / In-Progress / Done)

Color-coded status badges:

Pending → Yellow

In-Progress → Blue

Done → Green

Reusable UI components:

TaskFilter

StatusBadge

Dynamic leaderboard:

Performance score calculated from completed tasks

Rank sorted live (no hardcoded data)

UX upgraded from demo-level to production-style

✅ Day 13: Stability & API Consistency

Fixed API mismatch issues across User & Admin

Unified API method names

Removed breaking changes causing blank screens

Ensured Admin + User dashboards work simultaneously

Application stabilized for further scaling

▶️ Run Locally
npm install
npm run dev
