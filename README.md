🏆 WorkRank Performance System

A role-based performance tracking and ranking dashboard built using
React + Vite + Tailwind CSS.

The system provides:

Users → personal performance insights, tasks, ranking

Admins → system analytics, employee overview & task control

Built following a 30-day industry-style roadmap with clean architecture,
strict role-based routing, and scalable components.

🚀 Key Features
👤 User Module

Secure User Login

User Dashboard

KPI Metrics:

Tasks Completed

Performance Score

Rank

Performance Overview Chart

Task Management:

View assigned tasks

Mark tasks as completed

Dedicated Pages:

My Tasks

My Performance

My Rank (Live leaderboard)

🛠 Admin Module

Secure Admin Login

Admin Dashboard

System-wide KPIs:

Total Employees

Total Tasks

Completed Tasks

Performance Analytics Chart

Employee Overview

Task Management:

Create tasks

Update task status

Delete tasks

Monitor task completion

🔐 Authentication & Authorization

Context API–based authentication

Role-based access control (user / admin)

Protected routes using ProtectedRoute

Unauthorized access automatically redirected

Sidebar navigation dynamically changes by role

Logout clears auth state and redirects safely

🧱 Tech Stack
Layer	Technology
Frontend	React (Vite)
Styling	Tailwind CSS
Routing	React Router DOM
State Management	Context API
Authentication	Role-based (Context)
Data Layer	Mock API (In-memory)
Version Control	Git & GitHub
📁 Project Structure
src/
├── components/
│   ├── Charts.jsx
│   ├── MetricCard.jsx
│   ├── EmployeeCard.jsx
│   ├── TaskCard.jsx
│   ├── TaskFilter.jsx
│   ├── StatusBadge.jsx
│   ├── Sidebar.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── UserDashboard.jsx
│   ├── AdminDashboard.jsx
│   ├── UserTasks.jsx
│   ├── AdminTasks.jsx
│   ├── MyPerformance.jsx
│   ├── MyRank.jsx
│   └── Employees.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css

🔁 Application Flow

User/Admin logs in from Login page

Auth state stored in Context

Role-based redirection:

User → /user

Admin → /admin

Protected routes enforce access rules

Sidebar updates dynamically based on role

Logout resets auth state and returns to Login

📊 Development Progress (Up to Day 15)
✅ Day 1–3: Foundation

Project setup with Vite + React

Routing configuration

Login UI

Context-based authentication

Protected routes

✅ Day 4–7: Dashboard & Navigation

User/Admin dashboard separation

Sidebar layout

KPI cards & charts

Role-based navigation

Logout handling

✅ Day 8–9: Feature Expansion

Employee overview

Performance & Rank pages

Mock API layer

Clean role-based dashboards

✅ Day 10–12: Task System

User & Admin task pages

Task CRUD operations

Task filters (All / Pending / Done)

Status badges

Live leaderboard logic

✅ Day 13–15: Stability & Auth Refinement

Unified auth data structure ({id, name, role})

Fixed routing & blank-screen issues

Stable admin + user flows

Buttons & actions fully functional

Codebase stabilized for further scaling


✅ Day 16: Persistent Authentication & Real User-Based System
🔐 Authentication Enhancements

Implemented persistent login using localStorage

User session restores automatically on page reload

Auto-redirect:

User → /user

Admin → /admin

Secure logout clears stored session data

👤 Real User-Based Data Flow

Switched from role-based dummy users to ID-based users

Tasks are now assigned using actual user IDs

User dashboards fetch data dynamically based on logged-in user

📊 Accurate Performance Calculation

User performance calculated from:

Completed tasks per user

Real-time score computation

No hardcoded metrics anywhere in UI

🏆 Live Leaderboard System

Leaderboard now:

Uses real user task data

Ranks users dynamically based on score

Highlights logged-in user automatically

Removed static/demo ranking logic completely

🛠 Admin Dashboard Improvements

Admin metrics powered by centralized API:

Total employees

Total tasks

Completed tasks

Employee cards now reflect real performance data

One data source used across Admin & User views

🧱 Architecture Upgrade

Centralized API logic supports:

Users

Tasks

Metrics

Leaderboard

Clean separation of concerns:

UI → Pages & Components

Logic → API & Context

Codebase now backend-ready


## ✅ Day 17 — Real User-Based Task Flow & Session Persistence

### 🔥 What was implemented today

Day 17 focused on converting the system from **role-only logic** to a
**real user-id–based architecture**, making the project closer to a
production-ready system.

---

### 👤 User Identity Upgrade
- Tasks are now assigned using **user IDs** instead of role strings
- Every user sees **only their own tasks**
- Performance, score, and rank are calculated per user

---

### 🧠 Task Engine Improvements
- Centralized task filtering using `assignedTo: userId`
- Accurate task completion counts per user
- Score calculation based on completed tasks
- Admin can assign tasks to a specific user ID

---

### 🏆 Leaderboard (Real Logic)
- Leaderboard is dynamically generated
- Sorted by score (descending)
- Rank assigned after sorting
- Logged-in user highlighted in leaderboard

---

### 🔐 Authentication Persistence
- Login state stored in `localStorage`
- Session restored automatically on page reload
- Auto-redirect based on saved role (User/Admin)
- Secure logout clears session properly



## Day 19 – Activity Logs & Auth Session Fix

### What was implemented
- Added centralized **Activity Logs system** for admin
- Logged all critical actions:
  - Task creation
  - Task status updates
  - Task deletion
- Created **Admin Activity Logs page** to view real-time system actions
- Fixed critical **authentication session bug** causing infinite
  "Checking session..." screen after logout
- Introduced proper auth state handling using:
  - `user`
  - `loading` flag

### Technical Highlights
- In-memory activity log store with timestamped entries
- Admin-only protected route for activity logs
- Correct separation between:
  - Session loading
  - Logged-out state
- Improved app behavior to match real-world authentication flow

### Result
- No infinite loading screens
- Clean logout & redirect flow
- Admin has full visibility of system activity
- Application behavior now production-grade instead of demo-level

- ## ✅ Day 21 – Activity Logs Upgrade

### ✔ What was done
- Activity logs saved in **localStorage**
- Central `logActivity()` added in API
- **Admin Activity Logs page** implemented
- Reusable **ActivityFilter** component added
- Logs persist after refresh

### 📂 Files touched
- `api.js`
- `AdminActivity.jsx`
- `ActivityFilter.jsx`
- `Sidebar.jsx`
- `App.jsx`

### 🚀 Result
- Admin can track all system actions
- Logs are filtered, persistent, and clean

✔ Day 21 completed






▶️ Run Locally
npm install
npm run dev


