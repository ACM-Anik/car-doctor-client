import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{

        })
        .catch(error => console.log(error))
    }


    const navItems = <>
        <li><NavLink to="/">Homepage</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services ">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    const navIcons = <>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
            </div>
        </label>
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button>
    </>

    return (
        <div>
            <div className="navbar bg-[#F4F3F0] h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            {navIcons}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl"><img style={{ height: '60px' }} src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <li className="hidden lg:flex">{navIcons}</li>

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    {
                                        // user?.photoURL ?
                                        <div className="w-10 border border-[#FF3811] rounded-full">
                                            <img src={user?.photoURL} alt="profile" />
                                        </div>
                                        // :
                                        // <p>Profile</p>
                                    }
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><Link to="/bookings" className="hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">My Bookings</Link></li>
                                    <li><button onClick={handleLogOut} className="btn-sm ps-4 font-semibold text-center btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Logout</button></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login"><button className="mx-2 btn btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Login</button></Link>
                    }
                    <Link><button className="btn btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;