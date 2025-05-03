import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../screens/Auth/Login";
import ContextEntry from "../screens/ContextEntry";
import ChallengeAccept from "../screens/ChallengeAccept";
import Winner from "../screens/Winner";
import PreviousMatch from "../screens/PreviousMatch";
import Register from "../screens/Auth/Register";
import Verification from "../screens/Auth/Verification";
import ResetPassword from "../screens/Auth/ResetPassword";
import socket from "../utils/socket"; // Import Socket.IO
import { useEffect } from "react";
import ConnectionStatus from "../components/ConnectionStatus.";
import VerificationEmail from "../screens/Auth/VerificationEmail";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // Get token from storage
  return token ? element : <Navigate to="/" replace />; // Redirect if no token
};

// Redirect to ContextEntry if logged in
const PublicRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/context-entry" replace /> : element;
};

function AppRouter() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      socket.connect();
      const user = localStorage.getItem("user");
      const userDetail = user ? JSON.parse(user) : null;
   
      if (userDetail?.id) {
        socket.emit("storeSocketId", userDetail?.id);
      }

      // Handle disconnect
      return () => {
        socket.disconnect();
      };
    }
  }, [token]);

  return (
    <Router>
      <ConnectionStatus />
      <Routes>
        {/* Public Routes (Redirect if token exists) */}
        <Route path="/" element={<PublicRoute element={<Login />} />} />
        <Route
          path="/register"
          element={<PublicRoute element={<Register />} />}
        />
        <Route
          path="/verification"
          element={<PublicRoute element={<Verification />} />}
        />
        <Route
          path="/resetpassword"
          element={<PublicRoute element={<ResetPassword />} />}
        />
        <Route
          path="/verifyEmail"
          element={<PublicRoute element={<VerificationEmail />} />}
        />

        {/* Protected Routes (Accessible only if token exists) */}
        <Route
          path="/context-entry"
          element={<ProtectedRoute element={<ContextEntry />} />}
        />
        <Route
          path="/previous-match"
          element={<ProtectedRoute element={<PreviousMatch />} />}
        />
        <Route
          path="/challenge-accept"
          element={<ProtectedRoute element={<ChallengeAccept />} />}
        />
        <Route
          path="/winner"
          element={<ProtectedRoute element={<Winner />} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
