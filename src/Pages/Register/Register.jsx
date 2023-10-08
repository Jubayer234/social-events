import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2';

const Register = () => {


    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get ('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo')

        createUser(email,password,name,photo)
        .then(result => {
            const user = result.user;
            Swal.fire('Register successfully')
            navigate(location?.state ? location.state : '/' )
        })
        .catch(error => {
            console.error(error)
        })

    }
  return (
    <div>
        <div className=" min-h-screen pt-10 bg-gradient-to-r from-[#FFDFE7] to-[#F86486] ">
    <div>
        <h2 className='text-center pb-5 mb-8 text-4xl text-white font-semibold border-b w-96 mx-auto font-serif'>Please Register</h2>
        <div className="card w-[400px] mx-auto  shadow-2xl bg-gradient-to-r   from-[#F86486] to-pink-300   ">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Your Photo" name='photo' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Provide password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn  bg-gradient-to-r from-orange-200 to-red-400 ">Register</button>
                </div>
                <p className='text-white text-lg mt-5 text-center'>Already have an account? <Link className='text-blue-600 font-serif font-semibold' to="/login" >Login</Link></p>
            </form>
            
        </div>
    </div>
</div></div>
  )
}

export default Register