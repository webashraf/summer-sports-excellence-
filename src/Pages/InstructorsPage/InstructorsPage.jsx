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
        <div className="md:pt-[75px]">
            <ImageHeading hText={'Our Instructors'}></ImageHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 md:px-10">
                {
                    instructors?.map(instructor => <div key={instructor?._id} className="card md:card-side glass shadow-2xl">
                        <figure><img className="h-[200px] md:h-[400px] w-full md:w-[250px] object-cover object-center" src={instructor?.photoUrl} alt="Movie" /></figure>
                        <div className="card-body">

                            <div className="space-y-3">
                                <h2 className="card-title text-2xl uppercase font-serif"><span className="font-bold ">Name : </span>{instructor?.name}</h2>
                                <p className="text-md "><span className="font-bold">Email : </span><span className="underline">{instructor?.email}</span></p>
                                <p className="text-md"><span className="font-bold">Total Class : </span>{instructor?.totalClass ? instructor?.totalClass : 0}</p>
                                <ul>
                                    <span className="font-bold text-md">Class Name : </span>
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
        </div>
    );
};

export default InstructorsPage;