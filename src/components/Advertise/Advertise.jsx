import axios from 'axios'
import React, { useEffect, useState } from 'react'
import loadingAnimation from '../../assets/images/cooking.gif'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Advertise = () => {

    const [adItem, setAdItem] = useState(null);

    //Get advertise item
    useEffect(() => {
        axios.get('http://localhost:9000/food/6546705fe83c0452040601e6')
            .then(res => setAdItem(res.data))
    }, []);

    //initialize aos
    useEffect(() => {
        Aos.init({
            duration: 800
        })
    }, [])



    return (
        <div className='border my-10 md:mb-32 border-white'>
            {
                adItem ? <div className='w-full h-[300px] md:h-[500px] relative md:my-32 '>
                    <img data-aos="fade-right" className='hidden md:w-3/4 md:block lg:w-1/2 h-full rounded' src={adItem?.image} alt="" />

                    <div data-aos="fade-left" className='bg-red-600 md:w-3/4  lg:w-1/2 h-full md:absolute md:right-5 md:top-32 lg:right-28 lg:top-28 rounded' >
                        <div className='w-full h-full  flex flex-col items-center justify-center space-y-5 p-5 lg:p-0'>
                            <h3 className='text-white text-2xl md:text-4xl lg:text-6xl font-semibold'>Margarita Pizza Offer</h3>
                            <h4 className='text-4xl md:text-8xl text-white font-bold'>50% off</h4>
                            <Link to={`/food/${adItem._id}`}> <button className='border-white border px-12 hover:scale-105 transition-all duration-200 py-4 rounded-full text-white font-semibold'>Order now</button></Link>
                        </div>
                    </div>
                </div>
                    :
                    <div className='flex flex-cols items-center justify-center'>
                        <img className=' w-80' src={loadingAnimation} alt="" />
                        <p className='text-2xl font-bold text-center'>Cooking....</p>
                    </div>
            }
        </div>
    )
}

export default Advertise