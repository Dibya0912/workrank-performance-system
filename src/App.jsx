import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import MyPerformance from "./pages/MyPerformance";
import MyRank from "./pages/MyRank";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* USER */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/performance"
        element={
          <ProtectedRoute role="user">
            <MyPerformance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/rank"
        element={
          <ProtectedRoute role="user">
            <MyRank />
          </ProtectedRoute>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute role="admin">
            <Employees />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
