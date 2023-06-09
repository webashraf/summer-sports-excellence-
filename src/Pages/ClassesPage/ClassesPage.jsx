import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ClassesPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    console.log('student', user?.email);

    useEffect(() => {
        axios.get(`http://localhost:5000/isUser/${user?.email}`)
            .then(res => setStudent(res.data));
    }, [user]);
    



    const { data: classes = [], } = useQuery({
        queryKey: ['allClasses'],
        enabled: !!user,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/approvedClasses`)
            return res.data;
        }
    })
    console.log(classes);


    const handleSelectedClass = async(id) => {

        if (!user) {
            Swal.fire({
                title: 'Log in fast then select the course',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login page'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

        else {
            const studentEmail = {email: user?.email}
            console.log(studentEmail);
           await axios.post(`http://localhost:5000/selectedClass/${id}`, studentEmail)
                .then(res => {
                    console.log(res.data)
                    if (res.data.acknowledged) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class successfully selected',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Course all ready selected!!',
                            text: 'You not select a course multiple time.',
                        })
                    }
                })

        }


    }



    return (
        <div className="px-20">
            <div className="grid grid-cols-3 gap-6">
                {
                    classes.map(classItem => <div key={classItem._id} className={classItem.seats < 1 ? 'card w-80 mx-auto bg-red-400 shadow-xl text-slate-200' : "card w-80 mx-auto bg-base-100 shadow-xl"}>
                        <figure><img src={classItem.photoUrl} className="h-[180px] object-cover w-full" alt="Sports Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {classItem.className}
                                {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <p><span className="uppercase font-bold text-indigo-800">Instructor name:</span> {classItem.instructorName}</p>
                            <p><span className="uppercase font-bold text-indigo-800">Total Seats: </span> {classItem.seats} Available</p>
                            <p><span className="uppercase font-bold text-indigo-800">Course Price: </span> ${classItem.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleSelectedClass(classItem._id)} disabled={!student || classItem.seats < 1} className="btn btn-xs btn-outline hover:bg-emerald-800 hover:text-white">Select Class</button>
                                {/* <div className="badge badge-outline">Products</div> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;