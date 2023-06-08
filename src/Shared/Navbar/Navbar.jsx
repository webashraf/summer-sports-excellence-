import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { signOutUser, user } = useAuth();
    console.log(user);
    const handleLogOut = () => {
        signOutUser();
    }



    const menu = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600 -tracking-tight' : 'text-black'}>Home</NavLink>

        <NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-red-600 ' : 'text-black'}>Instructors</NavLink>

        <NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}>Classes</NavLink>

        {user && <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}>Dashboard</NavLink>}

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-6 uppercase font-semibold">
                        {menu}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">SummerSportsExcellence</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 uppercase font-semibold">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {!user ? <Link to={'/login'} className="btn">Login</Link> :
                    <>

                        <div className='w-[60px] h-[60px] rounded-md border-double border-4 overflow-hidden'>
                        <img className='w-[100px]' src={user?.photoURL && user?.photoURL} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn">Logout</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;