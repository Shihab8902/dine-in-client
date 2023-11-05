import React from 'react'

import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyAddCard = ({ food }) => {
    const { image, name, description, price, _id } = food;

    const navigate = useNavigate();



    return <div className=' md:h-[220px] flex flex-col md:flex-row items-center gap-6 border p-5 rounded-lg'>
        <div className='h-[220px] md:h-full w-60'>
            <img className='w-full h-full rounded-lg' src={image} alt="Image unavailable" />
        </div>
        <div className='space-y-3'>
            <h3 className='font-bold text-3xl'>{name}</h3>
            <p className='font-semibold text-gray-400'>{
                description.length > 50 ? description.slice(0, 50) + "...." : description
            }</p>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-xl font-sans text-orange-500'>${price}</p>
                <button onClick={() => navigate(`/updateFood/${_id}`)} title='Edit Item' className='text-2xl text-green-600'><FaEdit /></button>
            </div>
        </div>
    </div>
}

export default MyAddCard