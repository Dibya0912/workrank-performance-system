import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginAsUser = () => {
    login({
      id: 1,
      name: "You",
      role: "user",
    });
    navigate("/user");
  };

  const loginAsAdmin = () => {
    login({
      id: 999,
      name: "Admin",
      role: "admin",
    });
    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 text-center bg-white shadow rounded-xl w-80">
        <h1 className="mb-6 text-2xl font-bold">WorkRank Login</h1>

        <button
          onClick={loginAsUser}
          className="w-full py-2 mb-3 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Login as User
        </button>

        <button
          onClick={loginAsAdmin}
          className="w-full py-2 text-white bg-gray-900 rounded hover:bg-black"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
