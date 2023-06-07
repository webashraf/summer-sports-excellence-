import { AiOutlineHome, AiTwotoneHome } from 'react-icons/ai';
import { FaAddressCard, FaBookMedical, FaUserEdit } from "react-icons/fa";
import { SiGoogleclassroom } from 'react-icons/si';
import { BsBookHalf } from 'react-icons/bs';
import { MdJoinRight, MdPayments } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const role = 'instructor'

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-white bg-cyan-950 px-5">
                        <li className='flex flex-col items-center'>
                            <h1 className='text-xl font-bold'>SummerSportsExcellence</h1>
                            <h4 className='text-4xl '>Dashboard</h4>
                        </li>
                        <hr />
                        <div className='mt-10 mb px-4'>
                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <AiOutlineHome className='text-3xl'></AiOutlineHome> Go to Home</Link>
                        </div>

                        {role === 'admin' && <div className='my-10 px-4'>
                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <AiTwotoneHome className='text-3xl'></AiTwotoneHome> Admin Home</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <SiGoogleclassroom className='text-3xl'></SiGoogleclassroom>Manage Class</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <FaUserEdit className='text-3xl'></FaUserEdit>Manage User</Link>
                        </div>                        }
                        
                        {role === 'instructor' && <div className='my-10 px-4'>
                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <AiTwotoneHome className='text-3xl'></AiTwotoneHome> Instructor Home</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/dashboard/addclass'}> <FaBookMedical className='text-3xl'></FaBookMedical>Add a Class</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <BsBookHalf className='text-3xl'></BsBookHalf>My Class</Link>
                        </div>    }                    
                        
                        {role === 'user' && <div className='my-10 px-4'>
                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <AiTwotoneHome className='text-3xl'></AiTwotoneHome> User Home</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <FaAddressCard className='text-3xl'></FaAddressCard>My Selected Classes</Link>

                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <MdJoinRight className='text-3xl'></MdJoinRight>My Enrolled Classes</Link>
                            <Link className='text-xl underline leading-3 flex items-center gap-4 mb-3' to={'/'}> <MdPayments className='text-3xl'></MdPayments>Payment</Link>
                        </div>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;