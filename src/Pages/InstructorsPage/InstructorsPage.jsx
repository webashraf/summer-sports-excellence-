import axios from "axios";
import { useEffect, useState } from "react";

const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/instructors`)
            .then(res => setInstructors(res.data))
    }, [])
    console.log(instructors);
    return (
        <div>
            {
                instructors.map(instructor => <div key={instructor._id} className="card card-side glass shadow-2xl w-1/2">
                    <figure><img className="h-[400px]" src={instructor.photoUrl} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl"><span className="font-bold">Name : </span>{instructor.name}</h2>
                        <p className="text-xl"><span className="font-bold">Email : </span>{instructor.email}</p>
                        <p className="text-xl"><span className="font-bold">Total Class : </span>{instructor.totalClass}</p>
                        <ul>
                            <span className="font-bold text-xl">Class Name</span>
                            {
                                instructor.classes.map((className, i) => <li className="ml-6 text-lg list-decimal" key={i}>{className}</li>)
                            }
                        </ul>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Classes</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default InstructorsPage;