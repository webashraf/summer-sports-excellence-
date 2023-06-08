import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
    const {user} = useAuth()
    // const [classes, setClasses] = useState([])

    const {data: classes = []} = useQuery({
        queryKey: ['classs', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allClasses/${user?.email}`)
            return res.data;
        }
    })
    console.log(user?.email);
    console.log(classes);




    // console.log(classes);

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
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Total Enrolled</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>




                        {classes.map((classItem , i) => <tr key={classItem} className="hover">
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
                            <td>{classItem.feedback ? classItem.feedback : "--"}</td>
                            <td>{classItem.status}</td>
                            <td className="text-center">{classItem.enrolled ? classItem.enrolled : 0}</td>
                            <th>
                                <button className="btn bg-emerald-900 btn-block text-white btn-xs">Update</button>
                            </th>
                        </tr>)}




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
