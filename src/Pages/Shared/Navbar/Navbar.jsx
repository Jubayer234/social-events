import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/headr.png'
import userPic from '../../../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {


    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }


    const navLinks = <>
        <li className='btn bg-gradient-to-r from-[#F86486] to-pink-300  text-white'> 
        <NavLink className={({ isActive }) =>
        isActive ? " underline" : ""} to="/">Home</NavLink> 
        </li>
        <li className=' btn bg-gradient-to-r from-[#F86486] to-pink-300 text-white'>
            <NavLink  className={({ isActive }) =>
        isActive ? " text-white underline" : ""} to="/about">About Us</NavLink>
            </li>
        <li className='btn bg-gradient-to-r from-amber-200 to-red-300 text-white'>
            <NavLink className={({ isActive }) =>
        isActive ? " text-white underline" : ""} to="/register">Register</NavLink>
            </li>
        <li className='btn bg-gradient-to-r from-amber-200 to-red-300 text-white'>
            <NavLink className={({ isActive }) =>
        isActive ? " text-white underline" : ""} to="/login">Login</NavLink>
            </li>
            
    </>

    return (
        <div className='max-w-7xl mx-auto pb-1'>
            <div className='pt-7'>
           <div className=''>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center text-white'>Social Events</p>
           </div>
           <hr className='w-2/5 mt-2 mx-auto' />
            </div>
            <div className="navbar mt-2 border-b mb-4">
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
                    {
                        user ? 
                        <button onClick={handleLogOut} className='h-11 w-28 ml-3 border bg-gradient-to-r from-[#F86486] to-pink-300   rounded-lg text-xl font-semibold text-white'>LogOut </button>
                        :
                        <Link to={'/login'}>
                        <button className='h-11 w-28 ml-3 border bg-gradient-to-r from-[#F86486] to-pink-300   rounded-lg text-xl font-semibold text-white'>Login</button>
                    </Link>

                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;