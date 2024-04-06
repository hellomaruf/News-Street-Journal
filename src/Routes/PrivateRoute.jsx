import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  console.log(location.pathname);
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

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute;
