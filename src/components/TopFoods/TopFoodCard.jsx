import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

const TopFoodCard = ({ food }) => {
    const { image, name, category, price, _id } = food;

    //Initialize aos
    useEffect(() => {
        Aos.init({
            duration: 800
        });
    }, [])



    return <div data-aos="fade-up" className=' border rounded-lg overflow-hidden'>
        <img className='w-full h-[260px] rounded hover:scale-110 transition-all duration-300' src={image} alt="" />
        <div className='p-3'>
            <h4 className='font-bold text-2xl my-5'>{name}</h4>
            <div className='flex justify-between items-center'>
                <p className=' font-sans font-semibold text-xl text-orange-500 '>${price}</p>
                <p className='text-gray-500'>{category}</p>
            </div>
            <button className='bg-orange-500 w-full hover:bg-orange-600 rounded-lg py-4 mt-5 font-semibold text-lg text-white'>View Details</button>
        </div>
    </div>
}

export default TopFoodCard