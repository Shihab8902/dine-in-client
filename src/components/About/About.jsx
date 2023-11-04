import React from 'react'

const About = () => {
    return <div className='flex items-center flex-col lg:flex-row gap-10 my-20'>
        <div className='flex-1'>
            <img className='lg:h-[500px]  w-full rounded' src="https://i.ibb.co/MfzBggC/photo-1546069901-ba9599a7e63c-auto-format-fit-crop-q-80-w-1780-ixlib-rb-4-0.jpg" alt="" />
        </div>

        <div className='flex-1'>
            <p className='font-semibold text-xl text-orange-600'>About Our Restaurant</p>
            <h3 className='text-3xl md:text-5xl font-semibold my-5 leading-tight'>We Provide Good Food For Your Family!</h3>
            <p className='font-medium leading-loose text-gray-500'>Indulge in culinary delight at our restaurant, where we take pride in serving more than just meals—we provide good food for your family. With a menu crafted with love, we offer a delectable array of dishes that bring joy to every family gathering. Savor unforgettable moments with us.</p>
        </div>
    </div>
}

export default About