import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ImageHeading from "../../Shared/ImgHeading/ImageHeading";
import useAuth from "../../hooks/useAuth";

const ClassesPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    console.log('student', user?.email);


    const { data: classes = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axios.get(`https://a12-server-eight.vercel.app/approvedClasses`)
            return res.data;
        }
    })
    console.log(classes);




    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/isUser/${user?.email}`)
            .then(res => setStudent(res.data));
    }, [user]);
    console.log(student);




    const handleSelectedClass = async (id) => {

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
            const studentEmail = { email: user?.email }
            console.log(studentEmail);
            await axios.post(`https://a12-server-eight.vercel.app/selectedClass/${id}`, studentEmail)
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
        <div className="">
            
            <ImageHeading hText={"Our All Classes"}></ImageHeading>
            <div className="grid grid-cols-3 gap-6 px-10 py-20">
                {
                    classes.map(classItem => <div key={classItem._id} className={classItem.seats < 1 ? 'card w-[370] mx-auto bg-red-400 shadow-xl text-slate-200' : "card w-[380px] mx-auto bg-base-100 shadow-xl"}>
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