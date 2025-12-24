# WorkRank Performance System 🚀

WorkRank is a modern **performance evaluation and ranking system** built using
**React, Vite, Tailwind CSS**, focusing on **role-based access, authentication logic,
and dashboard-driven UI**.

This project is being developed step-by-step with clean commits to demonstrate
real-world frontend architecture.

---

## 🔥 Project Status

### ✅ Day 1–2 (Completed)
- Vite + React project setup
- Tailwind CSS integration
- Clean folder structure
- Login & Dashboard pages
- React Router setup
- GitHub repository initialized

### ✅ Day 3 (Completed)
- Authentication Context (Context API)
- Role-based login (User / Admin)
- Protected routes
- Logout functionality
- Improved SaaS-style UI theme
- Sidebar + dashboard layout base

---

## 🧠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

workrank-performance-system/
│
├── src/
│ ├── components/
│ │ └── ProtectedRoute.jsx
│ │
│ ├── context/
│ │ └── AuthContext.jsx
│ │
│ ├── pages/
│ │ ├── Login.jsx
│ │ └── Dashboard.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

yaml
Copy code

---

## 🔐 Authentication & Routing Logic

- **AuthContext**
  - Manages login/logout state
  - Stores user role (`user` or `admin`)

- **ProtectedRoute**
  - Prevents access to dashboard without login
  - Redirects unauthenticated users to login

- **Role-Based Login**
  - Separate login buttons for User and Admin
  - Role available throughout the app via context

---

## 🎨 UI Highlights

- Clean SaaS-style dashboard layout
- Sidebar navigation
- Metric cards layout
- Tailwind theme with reusable colors and shadows

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
