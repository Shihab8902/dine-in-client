import React, { useContext, useState } from 'react'
import bg from '../../assets/images/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { UserContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { signInUser, signInWithGoogle } = useContext(UserContext);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(userCredential => {
                if (userCredential.user) {
                    Swal.fire({
                        title: "Logged in!",
                        text: "Your account has been logged in successfully.",
                        icon: "success"
                    })
                    form.reset();
                    navigate(location.state ? location.state : "/");
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })
    }



    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: "Logged in!",
                        text: "Your account has been logged in successfully.",
                        icon: "success"
                    })
                    navigate(location.state ? location.state : "/");
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })
    }


    return <div className=' flex my-10 '>

        <Helmet>
            <title>Dinein | Login</title>
        </Helmet>

        <div className='flex-1 hidden lg:block'>
            <img src={bg} className='w-full h-full lg:rounded-tl-lg lg:rounded-bl-lg' alt="" />
        </div>


        <div className='md:bg-gray-100 rounded-lg lg:rounded-none p-5 md:p-12 lg:rounded-tr-lg lg:rounded-br-lg  flex-1'>
            <h3 className=' font-bold text-[32px] text-center'>Welcome back!</h3>
            <p className='  font-medium text-gray-400 mt-3 text-center'>Enter your details to login to your account.</p>

            <form onSubmit={handleSubmit}>
                <div className='w-full bg-white border flex items-center rounded-lg my-5'>
                    <span className=' text-gray-400 text-xl ml-3'> <HiOutlineMail /></span>
                    <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type="email" name="email" id="email" placeholder='Enter email address' required />
                </div>

                <div className='w-full bg-white border flex items-center rounded-lg'>
                    <span className=' text-gray-400 text-xl ml-3'> <AiOutlineLock /></span>
                    <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                    <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='relative right-3 cursor-pointer text-gray-400 text-xl'>
                        {
                            isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                        }
                    </span>

                </div>

                <div className='my-5'>
                    <input className='bg-orange-500 w-full py-3 cursor-pointer text-white font-semibold rounded-lg' type="submit" value="Login" />
                </div>
            </form>

            <hr className='border-black ' />

            <div className='flex justify-center mt-5'>
                <button onClick={handleSignInWithGoogle} className='flex items-center font-semibold gap-1 border bg-gray-200 rounded-lg py-2 px-3'><FcGoogle className='text-lg' /> Continue with Google</button>
            </div>

            <p className='mt-5 text-center font-semibold text-sm'>Don't have an account? <Link state={location.state} to="/register" className='text-red-600 hover:underline'>Register</Link></p>

        </div>
    </div>
}

export default Login