import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const AdminPrivateRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth;
    const location = useLocation();
    console.log(location);
    console.log("Admin Private Route", user, isAdmin);

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }



    return (user && isAdmin) ? children : <Navigate to={"/"} state={{from: location}} replace></Navigate>


};

export default AdminPrivateRoute;