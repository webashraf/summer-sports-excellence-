import { useEffect, useState } from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { IoMdFlashlight, IoMdMoon } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/logo.png";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { signOutUser, user } = useAuth();
    // console.log(user);



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
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'py-[2px] px-2 rounded-lg text-white bg-[#9a1111] -tracking-tight' : 'text-white'}>Home</NavLink>

        <NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'py-[2px] px-2 rounded-lg text-white bg-[#9a1111] ' : ' text-white'}>Instructors</NavLink>

        <NavLink to={'/classes'} className={({ isActive }) => isActive ? 'py-[2px] px-2 rounded-lg text-white bg-[#9a1111]' : 'text-white'}>Classes</NavLink>

        <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'py-[2px] px-2 rounded-lg text-white bg-[#9a1111]' : 'text-white'}>Dashboard</NavLink>
        {user && <button onClick={handleLogOut} className="btn btn-primary text-[#000000ad] font-bold md:hidden">Logout</button>}

    </>


    return (
        <>
            <div className='hidden md:block'>
                <div className='w-full flex justify-center items-center py-5 flex-col shadow-xl border-b-4 border-[#e01111]'>
                    <Link to={'/'} className=" normal-case text-xl flex-col">
                        <img className='w-[250px]' src={logo} alt="" />
                    </Link>
                    <p className='capitalize text-[#3298ba] font-semibold'>A complete sports school</p>
                </div>
            </div>



            <div className="navbar bg-base-100 z-30 shadow-xl md:min-h-0 md:bg-[#e01111] md:px-7 w-full">
                <div className="navbar-start md:hidden w-[80%] md:w-auto">
                    <div className="dropdown z-30">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-6 uppercase font-semibold">
                            {menu}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl md:hidden mx-auto">
                        <img className='w-[150px]' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex justify-center items-center">
                    <ul className="menu menu-horizontal px-1 gap-6 uppercase font-semibold">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end space-x-3 ml-auto w-[20%] md:w-auto">

                    <div className='hidden md:inline-block'>
                        <label className="swap swap-rotate ">

                            <input type="checkbox"
                                onChange={handleToggle}
                                // show toggle image based on localstorage theme
                                checked={theme === "light" ? false : true}
                            />

                            <IoMdFlashlight className='swap-on fill-current text-4xl text-yellow-400'></IoMdFlashlight>

                            <IoMdMoon className='swap-off fill-current text-4xl text-white'></IoMdMoon>


                        </label>
                    </div>

                    {!user ? <Link to={'/login'} className="btn btn-sm border-[#1686e8] bg-[#1686e8] text-white">Login</Link> :
                        <>

                            <div className='w-[60px] h-[60px] rounded-md border-double border-4 overflow-hidden'>
                                <img referrerPolicy='no-referrer' className='w-[100px]' src={user?.photoURL && user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="btn hidden md:block btn-primary text-[#000000ad] font-bold">Logout</button>
                        </>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;