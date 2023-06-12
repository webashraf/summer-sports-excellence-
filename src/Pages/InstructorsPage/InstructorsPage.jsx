import axios from "axios";
import { useEffect, useState } from "react";
import ImageHeading from "../../Shared/ImgHeading/ImageHeading";

const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/instructors`)
            .then(res => setInstructors(res.data))
    }, [])
    console.log(instructors);
    return (
        <>
            <ImageHeading hText={'Our Instructors'}></ImageHeading>
            <div className="grid grid-cols-2 gap-6 py-20 px-10">
                {
                    instructors?.map(instructor => <div key={instructor?._id} className="card card-side glass shadow-2xl">
                        <figure><img className="h-[400px]" src={instructor?.photoUrl} alt="Movie" /></figure>
                        <div className="card-body">

                            <div className="space-y-3">
                                <h2 className="card-title text-2xl"><span className="font-bold">Name : </span>{instructor?.name}</h2>
                                <p className="text-lg"><span className="font-bold">Email : </span>{instructor?.email}</p>
                                <p className="text-lg"><span className="font-bold">Total Class : </span>{instructor?.totalClass ? instructor?.totalClass : 0}</p>
                                <ul>
                                    <span className="font-bold text-lg">Class Name : </span>
                                    {
                                        instructor?.classes ? instructor?.classes.map((className, i) => <li className="ml-6 text-md list-decimal" key={i}>{className}</li>) : <h4>1. Class name is not found</h4>
                                    }
                                </ul>
                            </div>

                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary">See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default InstructorsPage;