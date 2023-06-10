import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import moment from 'moment';



const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [enrolledCourse, setEnrolledCorse] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/enrolledClass/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setEnrolledCorse(res.data);
            })
    }, [axiosSecure, user]);
    console.log(enrolledCourse);
    return (
        <div>
            <table className="table shadow-2xl">
                {/* head */}
                <thead className='bg-red'>
                    <tr className='bg-slate-800 rounded-t-lg text-white'>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Instructor Name</th>
                        <th className='text-center'>Payment Info</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        enrolledCourse.map((course, i) => <tr key={course._id} className='hover'>
                            <th>{i + 1}</th>
                            <td>
                                <h4 className="font-bold">{course.className}</h4>
                            </td>
                            <td>
                                <h4 className="font-bold">{course.instructorName}</h4>

                            </td>
                            <td className="font-bold flex flex-col gap-3">
                                <h4 className='text-cyan-700'> <span className='font-bold'>transectionId : </span> {course.transectionId}</h4>

                                <h4 className='text-teal-600'> <span className='font-bold'>Payment Time : </span>{moment(course.paymentTime).format('HH:mm DD-MM-YY ')}</h4>

                                <h4 className='text-violet-800'> <span className='font-bold'>Pay : </span> ${course.price}</h4>

                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.classPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default PaymentHistory;