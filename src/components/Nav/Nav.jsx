import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);




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

                    <div className='flex hidden items-center gap-4'>
                        <div className="dropdown  dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <Link to="/login"> <button className='bg-orange-500 hidden md:inline text-white font-semibold px-8 text-lg py-2 rounded'>Logout</button></Link>
                    </div>

                    <Link to="/login"> <button className='bg-orange-500 hidden md:inline text-white font-semibold px-8 text-lg py-2 rounded'>Login</button></Link>
                    <Link to="/login" className='text-2xl font-semibold md:hidden'><AiOutlineUserAdd /></Link>

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