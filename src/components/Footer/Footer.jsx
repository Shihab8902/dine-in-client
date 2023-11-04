import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="py-10 md:p-10 bg-base-200 text-base-content ">
            <div className='container mx-auto px-5 footer'>
                <aside>
                    <div className="text-3xl font-bold">Dine<span className='text-orange-600'>in</span></div>
                    <p>Enjoy your healthy and delicious meal.</p>
                </aside>
                <nav>
                    <header className="footer-title">Useful Links</header>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/foods" className="link link-hover">All food items</Link>
                    <Link to="/blog" className="link link-hover">Blog</Link>
                    <Link to="/login" className="link link-hover">Login</Link>
                </nav>
                <nav>
                    <header className="footer-title">Contact Us</header>
                    <li className='list-none'>Address: 43 Raymouth Rd. Baltemoer, London 3910</li>
                    <li className='list-none font-sans'>Phone: <a className='link link-hover' href="tel:+92520002203">+92520002203</a> </li>
                    <li className='list-none font-sans'>Email: <a className='link link-hover' href="mailto:info@dinein.com"> info@dinein.com</a> </li>
                </nav>
                <nav>
                    <header className="footer-title">Socials</header>
                    <div className='text-2xl flex items-center gap-4'>
                        <Link to="https://www.facebook.com"><FaFacebookF /></Link>
                        <Link to="https://www.instagram.com"><BsInstagram /></Link>
                        <Link className='text-4xl' to="https://www.google.com"><AiOutlineGooglePlus /></Link>
                    </div>
                </nav>
            </div>

            <p className='text-center font-sans mt-10'>Copyright &copy; 2023, @Dinein. All rights reserved.</p>
        </footer>


    )
}

export default Footer