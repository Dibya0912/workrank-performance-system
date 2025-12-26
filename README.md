🏆 WorkRank Performance System 🚀

A role-based performance evaluation and ranking system built using React + Vite + Tailwind CSS, designed to track user performance, rankings, and provide powerful admin-level insights through structured dashboards.

This project follows an industry-style architecture, emphasizing clean routing, role-based access control, and scalable component design.

🎯 Project Objective

Provide Users with insights into their performance, rank, and progress

Provide Admins with system-wide visibility and employee management tools

Implement secure, role-based routing with clean UI separation

Build a scalable foundation that can be extended to backend integration (Firebase / Node.js)

🚀 Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

Routing: React Router DOM

State Management: Context API

Authentication: Role-based Auth (Context + LocalStorage)

Charts & Visualization: Custom reusable chart components

Version Control: Git & GitHub

📁 Project Structure
src/
├── assets/
├── components/
│   ├── Charts.jsx
│   ├── MetricCard.jsx
│   ├── Sidebar.jsx
│   ├── EmployeeCard.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── UserDashboard.jsx
│   ├── AdminDashboard.jsx
│   ├── Employees.jsx
│   ├── MyPerformance.jsx
│   └── MyRank.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css

🔐 Authentication & Authorization Flow

User/Admin logs in via Login page

Role (user / admin) stored in Context API

Protected routes implemented using ProtectedRoute

Unauthorized access is blocked automatically

Logout clears session and redirects to Login

Architecture ready for backend token-based auth

📊 Key Features
👤 User Features

Personal dashboard with KPI metrics

Performance analytics view

Rank overview

Clean, role-specific navigation

🛠 Admin Features

Admin-only dashboard

Employee Management Page (table view)

System-wide performance metrics

Secure admin-only routes

Scalable foundation for reports & analytics

📅 Development Progress (Day-wise)
✅ Day 1 – Project Setup

Initialized project using Vite + React

Folder structure planning

GitHub repository setup

Initial commit workflow

✅ Day 2 – Routing & Login Page

Integrated React Router DOM

Built Login page

Implemented navigation flow

Base routing structure

✅ Day 3 – Authentication & Role Handling

Implemented Context API (AuthContext)

Role-based login (User / Admin)

Protected routes using ProtectedRoute

Fixed auth and routing edge cases

✅ Day 4 – Dashboard Architecture

Split dashboards:

UserDashboard

AdminDashboard

Built reusable components:

Sidebar

Metric cards

Charts

Role-based UI rendering

✅ Day 5 – UX & Auth Improvements

Persistent login logic

Logout functionality

Improved route protection

Refactored auth & layout code

✅ Day 6–7 – Data Layer & UI Stability

Introduced centralized mock API (api.js)

Removed hardcoded UI data

Stabilized chart rendering

Improved loading states

✅ Day 8 – Role-Based System Finalization

Fixed auth-provider wiring issues

Proper User/Admin route separation

Removed route mismatches

Ensured stable, crash-free navigation

✅ Day 9 – Admin Employee Management 🚀

Implemented Admin-only Employees page

Professional table-based employee view

Role-based sidebar navigation

Secure admin routes

Clean, scalable architecture ready for expansion

▶️ Run Locally
npm install
npm run dev
