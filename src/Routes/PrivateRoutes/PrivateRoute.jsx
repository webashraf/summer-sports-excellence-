import Loading from '../../Shared/Loading/Loading';
import useAuth from './../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    return user ? children : <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;