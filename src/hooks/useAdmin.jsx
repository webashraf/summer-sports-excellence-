import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    console.log(user?.email);

    const {data: isAdmin , isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin'],
        enabled: !!user?.email && !!localStorage.getItem('accessToken'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/isAdmin/${user?.email}`)
            return res.data;
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading]
};

export default useAdmin;