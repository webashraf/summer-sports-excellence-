import axios from 'axios';
import { useEffect, useState } from 'react';
import { } from "react-awesome-reveal";
import { AiFillHome, AiTwotoneHome } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaAddressCard, FaBookMedical, FaUserEdit } from "react-icons/fa";
import { MdJoinRight, MdPayments } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../../../../public/logo.png";
import Loading from '../../../Shared/Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    // console.log('isAdmin', isAdmin);

    const { user, loading } = useAuth();
    const [admin, setAdmin] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(true);

    console.log("instructorrrrrrrrrrrrrrrr", instructor);

    // useEffect(() => {
    //     axiosSecure.get(`/isAdmin/${user?.email}`)
    //         .then(res => {
    //             setAdmin(res.data);
    //             if (res.data.admin) {
    //                 // setStudent(false);
    //                 // setInstructor(false);
    //             }
    //         });

    // }, [user]);

    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/isInstructor/${user?.email}`)
            .then(res => {
                setInstructor(res.data?.instructor);
                if (res.data.instructor) {
                    setAdmin(false);
                    setStudent(false);
                }
            });
    }, [user]);

    useEffect(() => {
        axios.get(`https://a12-server-eight.vercel.app/isUser/${user?.email}`)
            .then(res => {
                setStudent(res.data);
                if (res.data?.instructor) {
                    setAdmin(false);
                    setInstructor(false);
                }
            });
    }, [user]);

    useEffect(() => {
        if (isAdmin) {
            setStudent(false);
            setInstructor(false);
        }
    }, [isAdminLoading, isAdmin]);

    // console.log(admin?.admin, instructor?.instructor, student?.user);


    return (
        <div className='relative'>
            {!user ? <Loading></Loading> : <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-10 bg-[#dbfeff76] overflow-x-auto h-screen">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side fixed left-0 top-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay mt-0"></label>
                    <ul className="menu p-3 md:w-[272px] text-secondary font-bold bg-cyan-600 px-4 sticky left-0 top-0 h-screen">

                        <li className='flex flex-col items-center text-white bg-[#ffffff87]  shadow-2xl border-b-4 border-white'>
                            <img className='w-[150px]' src={logo} alt="" />
                            <h4 className='text-2xl '>Dashboard</h4>

                        </li>


                        <div className='mt-10 mb px-4'>
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'}
                                    to={'/'}> <AiFillHome></AiFillHome> Go to Home</NavLink>
                            </>
                        </div>


                        {isAdmin && <div className='my-10 px-4'>
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to='/dashboard/admin' > <AiTwotoneHome className='text-xl'></AiTwotoneHome> Admin Home</NavLink>
                            </>
                            <>
                                <NavLink to={'/dashboard/manageclasses'} className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'}   > <SiGoogleclassroom className='text-xl'></SiGoogleclassroom>Manage Class</NavLink>
                            </>
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/manageuser'}> <FaUserEdit className='text-xl'></FaUserEdit>Manage User</NavLink>
                            </>
                        </div>}

                        {instructor && <div className='my-10 px-4'>
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/instructor'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> Instructor Home</NavLink>
                            </>

                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/addclass'}> <FaBookMedical className='text-xl'></FaBookMedical>Add a Class</NavLink>
                            </>

                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/myclasses'}> <BsBookHalf className='text-xl'></BsBookHalf>My Class</NavLink>
                            </>
                        </div>}

                        {student?.student && <div className='my-10 px-4'>
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/student'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> User Home</NavLink>
                            </>

                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/selectedClass'}> <FaAddressCard className='text-xl'></FaAddressCard>My Selected Classes</NavLink>
                            </>

                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/EnrolledClass'}> <MdJoinRight className='text-xl'></MdJoinRight>My Enrolled Classes</NavLink>
                            </>

                            <>
                                <NavLink className={({ isActive }) => isActive ? 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 shadow-2xl text-white rounded-2xl p-3 bg-cyan-950' : 'text-[15px] underline leading-3 flex items-center gap-2 mb-3 rounded-2xl p-3 text-white'} to={'/dashboard/paymentHistory'}> <MdPayments className='text-xl'></MdPayments>Payment History</NavLink>
                            </>
                        </div>}
                    </ul>

                </div>
            </div>}
        </div>
    );
};

export default Dashboard;