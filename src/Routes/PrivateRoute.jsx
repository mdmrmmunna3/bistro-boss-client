import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
        // <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoute;