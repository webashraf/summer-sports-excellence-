import axios from 'axios';
import { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get('https://a12-server-eight.vercel.app/allInstructorsClasses')
            .then(res => setClasses(res.data))
    }, [])

    console.log(classes);

    return (
        <div>
            <Heading pText={'See our best classes'} hText={'Popular Classes'}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[95%] mx-auto gap-10 md:gap-6'>
                {
                    classes.slice(0, 6).map(classItem => <div key={classItem._id} className="card glass shadow-2xl md:shadow-md border-none shadow-indigo-200">
                        <figure><img className='h-[200px] w-full object-cover' src={classItem.photoUrl} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-secondary">{classItem.className}</h2>
                            <p className='text-md text-secondary font-light'><span className='font-bold'>Total Enrolled : </span>{classItem.enrolled ? classItem.enrolled : 0}</p>
                            <p className='text-md text-secondary font-light'><span className='font-bold'>Instructor Name : </span>{classItem.instructorName}</p>
                            <p className='text-md text-secondary font-light'><span className='font-bold'>Course Price : </span>{classItem.price}</p>
                            <div className="card-actions justify-end">
                                <Link to={"/classes"} className="btn btn-primary btn-outline">Go to class!!</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;