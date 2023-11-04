import React, { useEffect } from 'react'

import bg from '../../assets/images/banner.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Banner = () => {



    return <div style={{ backgroundImage: `url(${bg})` }} className='w-full relative h-[350px] md:h-screen lg:h-[500px] rounded lg:rounded-lg bg-cover bg-center'>
        <div className='bg-[#0000009a] absolute h-full w-full rounded lg:rounded-lg'>

            <div className='flex flex-col  text-center justify-center h-full opacity-100 '>
                <p className='text-xl hidden md:block font-semibold text-gray-200 uppercase'>Enjoy your healthy delicious meal</p>
                <h3 className='text-5xl md:text-8xl font-bold text-gray-200 my-5'>Treat Yourself</h3>
                <p className='text-sm md:text-lg font-medium text-gray-300 md:w-1/2 mx-auto'>Taste the Adventure, Savor the Memories - Where Every Bite is a Journey. Join Us for Culinary Delights Beyond Imagination!</p>
                <Link to="/foods"> <button className='bg-orange-600 hover:bg-orange-700  mt-10 px-8 md:px-12 py-3 md:py-4 rounded-md text-xl font-semibold text-white w-max mx-auto'>Book now</button></Link>
            </div>

        </div>


    </div>

}

export default Banner