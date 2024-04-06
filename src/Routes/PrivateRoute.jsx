import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-[#BB1A17] "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
