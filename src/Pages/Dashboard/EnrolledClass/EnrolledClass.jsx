import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const EnrolledClass = () => {
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
                        <th>Image</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        enrolledCourse.map((course, i) => <tr key={course._id} className='hover'>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.classPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="font-bold">{course.className}</h4>
                            </td>
                            <td>
                                <h4 className="font-bold">Name: {course.instructorName}</h4>

                            </td>
                            <td className="text-center font-bold">${course.price}</td>

                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default EnrolledClass;