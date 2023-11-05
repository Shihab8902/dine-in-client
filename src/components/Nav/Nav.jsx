import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './nav.css';
import { UserContext } from '../../context/AuthProvider';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import Swal from 'sweetalert2';


const Nav = () => {

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOutUser } = useContext(UserContext);


    const handleLogOut = () => {
        Swal.fire({
            title: 'Log Out?',
            text: "Are you sure want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                    .then(() => {
                        Swal.fire(
                            'Logged Out!',
                            'Your account has been logged out successfully.',
                            'success'
                        )
                        navigate("/")
                    })

            }
        })
    }



    return (
        <nav className="  py-10 ">

            <div className=" flex items-center justify-between">
                <div className="text-3xl font-bold">Dine<span className='text-orange-600'>in</span></div>
                <div className="hidden md:flex text-lg  font-semibold space-x-10 ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/foods">All Food Items</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>

                <div className='flex items-center gap-6'>

                    {
                        user ? <div className='flex  items-center gap-4'>
                            <div className="dropdown  dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border">
                                        <img src={user?.photoURL || "https://i.ibb.co/FKyGxmB/gray-photo-placeholder-icon-design-ui-vector-35850819.webp"} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 bg-gray-100 shadow menu menu-sm dropdown-content  rounded-lg w-52">
                                    <li className='font-semibold mb-3'><Link className='hover:underline text-base' to="/myAdd">My added food items</Link></li>
                                    <li className='font-semibold mb-3'><Link className='hover:underline text-base' to="/addFood">Add a food item</Link></li>
                                    <li className='font-semibold '><Link className='hover:underline text-base' to="/myOrder">My ordered food items</Link></li>
                                </ul>
                            </div>
                            <button onClick={handleLogOut} className='bg-red-500 hidden md:inline text-white font-semibold px-7 text-lg py-2 rounded'>Logout</button>
                            <button onClick={handleLogOut} className='text-2xl font-semibold md:hidden'><FiLogOut /></button>
                        </div>
                            :
                            <div>
                                <Link to="/login"> <button className='bg-orange-500 hidden md:inline text-white font-semibold px-8 text-lg py-2 rounded'>Login</button></Link>
                                <Link to="/login" className='text-2xl font-semibold md:hidden'><AiOutlineUserAdd /></Link>
                            </div>
                    }



                    <div className="md:hidden ">
                        {
                            isMenuOpen ? <button className='text-2xl ' onClick={() => setIsMenuOpen(!isMenuOpen)}><AiOutlineClose /></button>
                                :
                                <button className='text-2xl ' onClick={() => setIsMenuOpen(!isMenuOpen)}><AiOutlineMenu /></button>
                        }

                    </div>
                    <div className={`md:hidden z-20 absolute top-20  right-0 left-0 bg-gray-200 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'h-64' : 'h-0'}`}>
                        <ul className="h-full flex flex-col py-10 space-y-4 px-5">
                            <li className='font-semibold text-lg'> <NavLink to="/">Home</NavLink></li>
                            <li className='font-semibold text-lg'> <NavLink to="/foods">All Food Items</NavLink></li>
                            <li className='font-semibold text-lg'>  <NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Nav