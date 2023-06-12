import { HiLightBulb } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaCloudMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import logo from "../../../public/logo.png"

const Navbar = () => {
    const { signOutUser, user } = useAuth();
    console.log(user);



    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);






    const handleLogOut = () => {
        signOutUser();
    }


    const menu = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-600 -tracking-tight' : 'text-primary'}>Home</NavLink>

        <NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-red-600 ' : ' text-primary'}>Instructors</NavLink>

        <NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-red-600' : 'text-primary'}>Classes</NavLink>

        {user && <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'text-red-600' : 'text-primary'}>Dashboard</NavLink>}
        {user && <button onClick={handleLogOut} className="btn btn-primary text-[#000000ad] font-bold md:hidden">Logout</button>}

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-6 uppercase font-semibold">
                        {menu}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className='w-[150px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 uppercase font-semibold">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className='hidden md:inline-block'>
                    <label className="swap swap-rotate ">

                        <input type="checkbox"
                            onChange={handleToggle}
                            // show toggle image based on localstorage theme
                            checked={theme === "light" ? false : true}
                        />

                        <HiLightBulb className='swap-on fill-current text-4xl text-yellow-400'></HiLightBulb>

                        <FaCloudMoon className='swap-off fill-current text-4xl text-slate-950'></FaCloudMoon>


                    </label>
                </div>
                {!user ? <Link to={'/login'} className="btn">Login</Link> :
                    <>

                        <div className='w-[60px] h-[60px] rounded-md border-double border-4 overflow-hidden'>
                            <img referrerPolicy='no-referrer' className='w-[100px]' src={user?.photoURL && user?.photoURL} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn hidden md:block btn-primary text-[#000000ad] font-bold">Logout</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;