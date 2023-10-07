import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import userPic from '../../../assets/user.png'

const Navbar = () => {

    const navLinks = <>
        <li className='btn active:text-black bg-gradient-to-r from-amber-200 to-red-300 text-white'> 
        <NavLink className={({ isActive }) =>
        isActive ? " text-black underline" : ""} to="/">Home</NavLink> 
        </li>
        <li className=' btn bg-gradient-to-r from-amber-200 to-red-300 text-white'>
            <NavLink  className={({ isActive }) =>
        isActive ? " text-black underline" : ""} to="/about">About</NavLink>
            </li>
        <li className='btn bg-gradient-to-r from-amber-200 to-red-300 text-white'>
            <NavLink className={({ isActive }) =>
        isActive ? " text-black underline" : ""} to="/register">Register</NavLink>
            </li>
    </>

    return (
        <div>
            <div className='mt-7'>
           <h1 className='mx-auto lg:text-5xl font-bold bg-gradient-to-r from-amber-200 to-red-500 text-white w-2/6 h-20 rounded-2xl flex items-center justify-center '>Social Events</h1>
            </div>
            <div className="navbar mt-7 border-b mb-4">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-gradient-to-r from-amber-200 to-red-300 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="lg:navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userPic} />
                        </div>
                    </label>
                    <Link className={({ isActive }) =>
        isActive ? " text-black underline" : ""} to='/login' >
                        <button className='h-11 w-28 ml-3 nav  bg-gradient-to-r from-amber-200 to-red-300 rounded-lg text-xl font-semibold text-white'>Login</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;