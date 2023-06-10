import axios from 'axios';
import { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allInstructorsClasses')
            .then(res => setClasses(res.data))
    }, [])

    console.log(classes);

    return (
        <div>
            Popular Classes
            <div className='grid grid-cols-3 w-[95%] mx-auto gap-4'>
                {
                    classes.slice(0, 6).map(classItem => <div key={classItem._id} className="card glass">
                        <figure><img className='h-[200px] w-full object-cover' src={classItem.photoUrl} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{classItem.className}</h2>
                            <p className='text-lg font-semibold'><span className='font-bold'>Total Enrolled : </span>{classItem.enrolled ? classItem.enrolled : 0}</p>
                            <p className='text-lg font-semibold'><span className='font-bold'>Instructor Name : </span>{classItem.instructorName}</p>
                            <p className='text-lg font-semibold'><span className='font-bold'>Course Price : </span>{classItem.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;