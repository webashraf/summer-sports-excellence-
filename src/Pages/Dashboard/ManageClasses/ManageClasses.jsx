import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { Link } from "react-router-dom/dist";

const ManageClasses = () => {
    const { user, loading } = useAuth()

    const { data: allClass = [], refetch } = useQuery({
        queryKey: ['allClass', user],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axios.get(`https://a12-server-eight.vercel.app/allClasses`)
            return res.data
        }
    })

    console.log(allClass);

    const handleUpdateStatus = (id, status) => {

        axios.put(`https://a12-server-eight.vercel.app/updateStatus/${id}`, { status })
            .then(res => {
                // console.log(res.data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Status successfully updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch();
            })
    }


    // const handleFeedbackBtn = async (id) => {
    //     // swal({
    //     //     content: "input",
    //     //   });
    //     const { value: text } = await Swal.fire({
    //         input: 'textarea',
    //         inputLabel: 'Message',
    //         inputPlaceholder: 'Type your message here...',
    //         inputAttributes: {
    //             'aria-label': 'Type your message here'
    //         },
    //         showCancelButton: true
    //     })

    //     if (text) {
    //         Swal.fire(text)
    //         console.log(text);

    //         axios.put(`https://a12-server-eight.vercel.app/classFeedbackUpdate/${id}`, { feedback: text })
    //             .then(res => {
    //                 console.log(res.data)
    //                 refetch();
    //             })

    //     }



    // }


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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allClass.map((classItem, i) => <tr key={classItem} className="hover">
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
                            <td className={classItem.status === 'approved' && 'text-emerald-700 font-bold' || classItem.status === 'deny' && 'text-red-500 font-bold' || 'text-yellow-500 font-bold'}>{classItem?.status}</td>
                            <th>
                                <button onClick={() => handleUpdateStatus(classItem._id, 'approved')}
                                    disabled={classItem.status !== 'pending'}
                                    className="btn bg-emerald-900 btn-block text-white btn-xs">Approve</button>
                                <button onClick={() => handleUpdateStatus(classItem._id, 'deny')}
                                    disabled={classItem.status !== 'pending'}
                                    className="btn bg-red-900 btn-block text-white btn-xs">Deny</button>
                                <Link to={`/dashboard/feedback/${classItem._id}`}
                                    className="btn bg-emerald-900 btn-block text-white btn-xs">Feedback</Link>
                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;