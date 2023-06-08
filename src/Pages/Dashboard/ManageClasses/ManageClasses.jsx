import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const {user, loading} = useAuth()
    // const [allClass, setAllClass] = useState([])

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/allClasses`)
    //     .then(res => setAllClass(res.data))
    // },[])
    // console.log(allClass);

    const {data: allClass = [], refetch} = useQuery({
        queryKey: ['allClass'],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allClasses`)
            return res.data
        }
    })

    console.log(allClass);

    const handleUpdateStatus = (id, status) => {
        axios.put(`http://localhost:5000/updateStatus/${id}`, {status})
        .then(res => {
            // console.log(res.data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
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
                            <th>Class Name</th>
                            <th>Instructor Info</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Status Update</th>
                        </tr>
                    </thead>
                    <tbody>




                        {allClass.map((classItem , i) => <tr key={classItem} className="hover">
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.photoUrl} alt="Avatar Tailwind CSS Component" />
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
                            <td className="text-center">{classItem.seats}</td>
                            <td className="text-center">${classItem.price}</td>
                            <td className={classItem.status === 'approve' && 'text-emerald-700 font-bold' || classItem.status === 'deny' && 'text-red-500 font-bold' || 'text-yellow-500 font-bold'}>{classItem?.status}</td>
                            <th>
                                <button onClick={() => handleUpdateStatus(classItem._id, 'approve')} disabled={classItem.status !== 'pending'} className="btn bg-emerald-900 btn-block text-white btn-xs">Approve</button>
                                <button onClick={() => handleUpdateStatus(classItem._id, 'deny')}
                                disabled={classItem.status !== 'pending'}
                                className="btn bg-emerald-900 btn-block text-white btn-xs">Deny</button>
                                <button className="btn bg-emerald-900 btn-block text-white btn-xs">Feedback</button>
                            </th>
                        </tr>)}




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;