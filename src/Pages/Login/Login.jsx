import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {


        const {signIn} = useContext(AuthContext);
        const location = useLocation();
        const navigate = useNavigate();

        const handleLogin = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email =form.get('email');
            const password =form.get('password');
            signIn(email,password)
            .then((result) =>{
                 Swal.fire('Successfully Logged In')

                navigate(location?.state ? location.state : '/' )

            })
            .catch(error =>{
                 Swal.fire('No User There')
                 
                console.error(error);
            })
        }

    return (
        <div>
            <div className=" min-h-screen pt-10 bg-gradient-to-r from-[#FFDFE7] to-[#F86486] ">
                <div>
                    <h2 className='text-center pb-5 mb-8 text-4xl text-white font-semibold border-b w-96 mx-auto'>Please Login</h2>
                    <div className="card w-[400px] mx-auto  shadow-2xl  bg-gradient-to-r from-pink-400 to-orange-300    ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-gradient-to-r from-orange-200 to-red-400 ">Login</button>
                            </div>
                            <p className='text-white text-lg mt-5 text-center '>Don't have an account? <Link className='text-blue-600 font-serif font-semibold' to="/register" >Register</Link></p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login