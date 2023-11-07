import React from 'react'

import bg from '../../assets/images/error.jpg'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();


    return <div className='flex flex-col items-center h-screen justify-center'>
        <img src={bg} alt="" />
        <h3 className='font-semibold text-center text-xl text-gray-600 my-5'>The page you are looking for, does not exist.</h3>
        <button onClick={() => navigate("/")} className='bg-purple-700 px-5 py-2 rounded-md text-white font-semibold text-lg'>Go Home</button>
    </div>
}

export default Error