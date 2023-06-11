import { useQuery } from '@tanstack/react-query';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SelectedClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !!user && loading === false,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
    console.log(selectedClasses);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`deleteSelectedClass/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-red'>
                        <tr className='bg-slate-800 rounded-t-lg text-white'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Info</th>
                            <th>Price</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {selectedClasses.map((classItem, i) => <tr key={classItem} className={i % 2 === 0 ? " bg-slate-200" : "hover"}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.classPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4>{classItem.className}</h4>
                            </td>
                            <td>
                                <h4 className="font-bold">Name: {classItem.instructorName}</h4>
                                <h4>Email:{classItem.instructorEmail}</h4>
                            </td>
                            <td className="text-center">${classItem.price}</td>
                            <th className='flex justify-around'>
                                <Link to={`/dashboard/payment/${classItem._id}`} className="btn bg-black text-white btn-md">

                                    PAY
                                </Link>

                                <button
                                    onClick={() => handleDelete(classItem._id)}
                                    className="btn btn-md "><BsFillTrashFill className='text-red-600 text-3xl'></BsFillTrashFill></button>

                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;