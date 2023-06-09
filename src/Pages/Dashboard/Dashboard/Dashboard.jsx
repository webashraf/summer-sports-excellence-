import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineHome, AiTwotoneHome } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaAddressCard, FaBookMedical, FaUserEdit } from "react-icons/fa";
import { MdJoinRight, MdPayments } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    // const [axiosSecure] = useAxiosSecure();


    const {user} = useAuth();
    const [admin, setAdmin] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/isAdmin/${user?.email}`)
        .then(res => setAdmin(res.data));
    }, [user]);

    
    useEffect(() => {
        axios.get(`http://localhost:5000/isInstructor/${user?.email}`)
        .then(res => setInstructor(res.data));
    }, [user]); 

    useEffect(() => {
        axios.get(`http://localhost:5000/isUser/${user?.email}`)
        .then(res => setStudent(res.data));
    }, [user]);

    console.log(admin?.admin, instructor?.instructor, student?.user);
  

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-10 bg-white">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay mt-0"></label>
                    <ul className="menu p-3 w-60 h-full text-white bg-cyan-950 px-4">
                        <li className='flex flex-col items-center'>
                            <h1 className='text-sm font-bold'>SummerSportsExcellence</h1>
                            <h4 className='text-2xl '>Dashboard</h4>
                        </li>
                        <hr />
                        <div className='mt-10 mb px-4'>
                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <AiOutlineHome className='text-xl'></AiOutlineHome> Go to Home</Link>
                        </div>

                        {admin?.admin && <div className='my-10 px-4'>
                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> Admin Home</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/manageclasses'}> <SiGoogleclassroom className='text-xl'></SiGoogleclassroom>Manage Class</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/manageuser'}> <FaUserEdit className='text-xl'></FaUserEdit>Manage User</Link>
                        </div>                        }
                        
                        {instructor?.instructor && 'instructor' && <div className='my-10 px-4'>
                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> Instructor Home</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/addclass'}> <FaBookMedical className='text-xl'></FaBookMedical>Add a Class</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/myclasses'}> <BsBookHalf className='text-xl'></BsBookHalf>My Class</Link>
                        </div>    }                    
                        
                        {student?.user && 'user' && <div className='my-10 px-4'>
                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> User Home</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/selectedClass'}> <FaAddressCard className='text-xl'></FaAddressCard>My Selected Classes</Link>

                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <MdJoinRight className='text-xl'></MdJoinRight>My Enrolled Classes</Link>
                            <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <MdPayments className='text-xl'></MdPayments>Payment</Link>
                        </div>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;