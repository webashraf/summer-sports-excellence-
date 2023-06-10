import useAuth from './../../hooks/useAuth';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();


    return user ? children : <Navigate to={'/'}></Navigate>
};

export default PrivateRoute;