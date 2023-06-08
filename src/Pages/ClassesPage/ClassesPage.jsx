import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
        // const selectedClass = {
        //     classId: classes._id,
        //     courseName: classes.className,
        //     instructorName: classes.instructorName,
        //     coursePrice: classes.price,
        // }
        // console.log(selectedClass, id);
    
        axios.post(`http://localhost:5000/selectedClass/${id}`)
        .then(res=> console.log(res.data))

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
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Instructor name:{classItem.instructorName}</p>
                            <p>Total Seats: {classItem.seats} Available</p>
                            <p>Course Price: ${classItem.price}</p>
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