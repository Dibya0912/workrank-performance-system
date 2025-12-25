import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);

    // 🔥 ROLE BASED ROUTING (MANDATORY)
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="p-8 text-center w-80 bg-surface rounded-xl shadow-card">
        <h1 className="text-3xl font-bold text-gray-800">
          WorkRank Login
        </h1>

        <button
          onClick={() => handleLogin("user")}
          className="w-full py-2 mt-6 text-white transition rounded-lg bg-primary hover:bg-blue-700"
        >
          Login as User
        </button>

        <button
          onClick={() => handleLogin("admin")}
          className="w-full py-2 mt-3 text-white transition bg-gray-900 rounded-lg hover:bg-black"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
