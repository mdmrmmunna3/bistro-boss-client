
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    /**
     * TODO: (loading || isAdminLoading) APPLY THIS CONDITON AND ALSO THIS (user && isAdmin)
     * (loading) / user
     */

    if (loading || isAdminLoading) {
        return <Loading></Loading>
        // <span className="loading loading-infinity loading-lg"></span>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;