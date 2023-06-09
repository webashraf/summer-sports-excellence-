import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/allUsers')
            return res.data;
        }
    })
    console.log(users);


    const handleUserRoleBtn = (id, role) => {
        console.log(id, role);
        axios.put(`http://localhost:5000/adminRoleUpdate/${id}`, { role })
            .then(res => {
                console.log(res.data);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update rule successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch();
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, i) => <tr key={user} className="hover">
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="font-bold">{user.name}</h4>
                            </td>
                            <td>
                                <h4>{user.email}</h4>
                            </td>
                            <td className={user?.role === 'admin' && 'text-red-600 font-bold uppercase' || user?.role === 'instructor' && 'text-yellow-600 font-bold uppercase' || 'uppercase'}>
                                {user?.role ? user?.role : 'student'}</td>
                            <th>
                                <button onClick={() => handleUserRoleBtn(user._id, 'admin')} disabled={user.role === 'admin'} className="btn bg-emerald-900  text-white btn-sm">Make Admin</button>
                                <button onClick={() => handleUserRoleBtn(user._id, 'instructor')} disabled={user.role === 'instructor'} className="btn bg-emerald-900  text-white btn-sm">Make Instructor</button>
                            </th>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;