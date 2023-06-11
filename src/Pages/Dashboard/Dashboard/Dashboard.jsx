import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bounce } from "react-awesome-reveal";
import { AiOutlineHome, AiTwotoneHome } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaAddressCard, FaBookMedical, FaUserEdit } from "react-icons/fa";
import { MdJoinRight, MdPayments } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Dashboard = () => {
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log('isAdmin', isAdmin);

    const { user, loading } = useAuth();
    const [admin, setAdmin] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(true);


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
                setInstructor(res.data);
                if (res.data.instructor) {
                    setAdmin(false);
                    setStudent(false);
                }
            });
    }, [user]);

    useEffect(() => {
        if (isAdmin) {
            setStudent(false);
            setInstructor(false);
        }
    }, [isAdminLoading, isAdmin]);

    console.log(admin?.admin, instructor?.instructor, student?.user);


    return (
        <div>
            {loading ? <Loading></Loading> : <div className="drawer lg:drawer-open">
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
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/'}> <AiOutlineHome className='text-xl'></AiOutlineHome> Go to Home</Link>
                            </Bounce>
                        </div>


                        {isAdmin && <div className='my-10 px-4'>
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/admin'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> Admin Home</Link>
                            </Bounce>
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/manageclasses'}> <SiGoogleclassroom className='text-xl'></SiGoogleclassroom>Manage Class</Link>
                            </Bounce>
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/manageuser'}> <FaUserEdit className='text-xl'></FaUserEdit>Manage User</Link>
                            </Bounce>
                        </div>}

                        {instructor?.instructor && <div className='my-10 px-4'>
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/instructor'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> Instructor Home</Link>
                            </Bounce>

                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/addclass'}> <FaBookMedical className='text-xl'></FaBookMedical>Add a Class</Link>
                            </Bounce>

                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/myclasses'}> <BsBookHalf className='text-xl'></BsBookHalf>My Class</Link>
                            </Bounce>
                        </div>}

                        {student && <div className='my-10 px-4'>
                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/student'}> <AiTwotoneHome className='text-xl'></AiTwotoneHome> User Home</Link>
                            </Bounce>

                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/selectedClass'}> <FaAddressCard className='text-xl'></FaAddressCard>My Selected Classes</Link>
                            </Bounce>

                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/EnrolledClass'}> <MdJoinRight className='text-xl'></MdJoinRight>My Enrolled Classes</Link>
                            </Bounce>

                            <Bounce>
                                <Link className='text-[15px] underline leading-3 flex items-center gap-2 mb-3' to={'/dashboard/paymentHistory'}> <MdPayments className='text-xl'></MdPayments>Payment History</Link>
                            </Bounce>
                        </div>}
                    </ul>

                </div>
            </div>}
        </div>
    );
};

export default Dashboard;