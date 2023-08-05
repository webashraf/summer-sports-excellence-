// import CountUp from 'react-countup/build/CountUp';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountInfo = () => {
    const [instructors, setInstructors] = useState([]);
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/instructors`)
            .then(res => setInstructors(res.data))
    }, []);
    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/students`)
            .then(res => setStudent(res.data))
    }, []);
    // console.log(instructors);

    // console.log("studenttttttttttttttttttttt", student);




    const { data: classes = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axios.get(`https://a12-server-eight.vercel.app/approvedClasses`)
            return res.data;
        }
    })
    // console.log("classes", classes);


    return (
        <div className=' my-10 bg-[url(https://images.pexels.com/photos/8941650/pexels-photo-8941650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-fied bg-no-repeat bg-cover'>
            <div className='w-full h-full flex justify-center bg-[#1010102c] py-10 gap-1'>

                <div className="text-center bg-[#ffffff49] text-[#fff] p-5 border-2 border-[#1010105d] w-[300px] h-[150px]">
                    <div className="text-5xl font-bold">
                        <CountUp start={0} end={instructors?.length} duration={3} />+
                    </div>
                    <p className="text-xl">Total Instructor</p>
                </div>

                <div className="text-center bg-[#ffffff49] text-[#fff] p-5 border-2 border-[#1010105d] g w-[300px] h-[150px]">
                    <div className="text-5xl font-bold">
                        <CountUp start={0} end={classes?.length} duration={100} />+
                    </div>
                    <p className="text-xl">Total Class</p>
                </div>

                <div className="text-center bg-[#ffffff49] text-[#fff] p-5 border-2 border-[#1010105d] g w-[300px] h-[150px]">
                    <div className="text-5xl font-bold">
                        <CountUp start={0} end={student?.length} duration={1} />+
                    </div>
                    <p className="text-xl">Total Student</p>
                </div>

            </div>
        </div>
    );
};

export default CountInfo;