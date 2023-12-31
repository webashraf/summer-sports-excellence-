import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
    const {user} = useAuth()
    // const [classes, setClasses] = useState([])

    const {data: classes = []} = useQuery({
        queryKey: ['classs', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`https://a12-server-eight.vercel.app/allClasses/${user?.email}`)
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
                            <td>{classItem.adminFeedback ? classItem.adminFeedback : "--"}</td>
                            <td className={classItem?.status === "approved" && 'text-emerald-700 font-bold' || classItem?.status === "deny" && 'text-red-500 font-bold' || "text-yellow-500 font-bold"}>{classItem?.status}</td>
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
