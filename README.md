

# 🏆 WorkRank Performance System 🚀

A role-based performance evaluation and ranking system built using **React + Vite + Tailwind CSS**, designed to track user performance, rankings, and provide admin-level insights through dashboards.

This project was built step-by-step following an industry-style architecture and development workflow.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** Context API
- **Auth Persistence:** LocalStorage
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

src/
├── assets/
├── components/
│ ├── Charts.jsx
│ ├── MetricCard.jsx
│ ├── Sidebar.jsx
│ └── ProtectedRoute.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Login.jsx
│ ├── UserDashboard.jsx
│ └── AdminDashboard.jsx
├── App.jsx
├── main.jsx
├── index.css

yaml
Copy code

---

## 📅 Development Progress

### ✅ Day 1 – Project Setup
- Initialized project using **Vite + React**
- Configured folder structure
- GitHub repository setup
- Initial commit & workflow setup

---

### ✅ Day 2 – Routing & Login Page
- Integrated **React Router DOM**
- Created Login page
- Implemented navigation logic
- Set up base layout and routing flow

---

### ✅ Day 3 – Authentication & Role Handling
- Implemented **Context API (AuthContext)**
- Added role-based login (User / Admin)
- Protected routes using `ProtectedRoute`
- Fixed routing & state issues

---

### ✅ Day 4 – Dashboards & UI Architecture
- Split dashboard into:
  - `UserDashboard`
  - `AdminDashboard`
- Built reusable components:
  - Metric cards
  - Charts
  - Sidebar
- Implemented role-based dashboard rendering
- Improved Tailwind-based UI layout

---

### ✅ Day 5 – Advanced Auth & UX Enhancements
- Added **persistent login** using `localStorage`
- Implemented **Logout functionality**
- Role-based sidebar navigation
- Improved route protection
- Refactored code for clean architecture

---

## 🔐 Authentication Flow

- User/Admin logs in via Login page
- Role stored in Context + LocalStorage
- Protected routes prevent unauthorized access
- Auto-login on refresh
- Logout clears session and redirects

---

## 📊 Features

- Role-based dashboards (Admin / User)
- Performance metrics cards
- Chart visualization component
- Persistent authentication
- Clean and scalable component structure
- Fully protected routing system

---

## ▶️ Run Locally

```bash
npm install
npm run dev
