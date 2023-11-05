import React, { useContext, useState } from 'react'
import bg from '../../assets/images/register.jpg';
import { Link, useNavigate } from 'react-router-dom';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiPhotoAlbum } from 'react-icons/bi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = () => {
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    const { createUser } = useContext(UserContext);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        //Reset password error
        setIsPasswordError(false);


        if (password.length < 6) {
            toast.error("Password must be at least 6 character!");
            setIsPasswordError(true);
            return;
        }


        createUser(email, password)
            .then(userCredential => {
                if (userCredential.user) {
                    updateProfile(userCredential.user, {
                        displayName: name,
                        photoURL: photoURL
                    })
                        .then(() => {
                            Swal.fire({
                                title: "Registered!",
                                text: "Your account has been registered successfully.",
                                icon: "success"
                            })
                            form.reset();
                            navigate("/");

                        })
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







    return (
        <div className=' flex my-10 '>

            <Helmet>
                <title>Dinein | Register</title>
            </Helmet>

            <div className='flex-1 hidden lg:block'>
                <img src={bg} className='w-full h-full lg:rounded-tl-lg lg:rounded-bl-lg' alt="" />
            </div>


            <div className='md:bg-gray-100 rounded-lg lg:rounded-none p-5 md:p-12 lg:rounded-tr-lg lg:rounded-br-lg  flex-1'>
                <h3 className=' font-bold text-[32px] text-center'>Welcome!</h3>
                <p className='  font-medium text-gray-400 mt-3 text-center'>Enter your details to register your account.</p>

                <form onSubmit={handleSubmit} >
                    <div className='w-full bg-white border flex items-center rounded-lg my-5'>
                        <span className=' text-gray-400 text-xl ml-3'> <AiOutlineUser /></span>
                        <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type="text" name="name" id="name" placeholder='Enter your name' required />
                    </div>

                    <div className='w-full bg-white border flex items-center rounded-lg my-5'>
                        <span className=' text-gray-400 text-xl ml-3'> <HiOutlineMail /></span>
                        <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type="email" name="email" id="email" placeholder='Enter email address' required />
                    </div>

                    <div className='w-full bg-white border flex items-center rounded-lg my-5'>
                        <span className=' text-gray-400 text-xl ml-3'> <BiPhotoAlbum /></span>
                        <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type="text" name="photoURL" id="photoURL" placeholder='Enter photo URL' required />
                    </div>

                    <div className={`w-full bg-white border flex items-center ${isPasswordError && "border border-red-500"} rounded-lg`}>
                        <span className=' text-gray-400 text-xl ml-3'> <AiOutlineLock /></span>
                        <input className='w-full p-3  outline-none font-semibold rounded-lg placeholder:font-medium' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='relative right-3 cursor-pointer text-gray-400 text-xl'>
                            {
                                isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }


                        </span>

                    </div>

                    <div className='my-5'>
                        <input className='bg-orange-500 w-full py-3 cursor-pointer text-white font-semibold rounded-lg' type="submit" value="Register" />
                    </div>
                </form>

                <hr className='border-black ' />



                <p className='mt-5 text-center font-semibold text-sm'>Already have an account? <Link to="/login" className='text-red-600 hover:underline'>Login</Link></p>

            </div>

            <ToastContainer />
        </div>
    )
}

export default Register