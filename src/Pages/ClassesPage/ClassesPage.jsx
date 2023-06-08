import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ClassesPage = () => {

    const { data: classes = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/approvedClasses`)
            return res.data;
        }
    })
    console.log(classes);


    const handleSelectedClass = (id) => {
    
        axios.post(`http://localhost:5000/selectedClass/${id}`)
        .then(res=> {
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
        })
 

    }



    return (
        <div className="px-20">
            <div className="grid grid-cols-3 gap-6">
                {
                    classes.map(classItem => <div key={classItem._id} className="card w-80 mx-auto bg-base-100 shadow-xl">
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
                                <div onClick={()=>handleSelectedClass(classItem._id)} className="badge badge-outline hover:bg-emerald-800 hover:text-white">Select Class</div>
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