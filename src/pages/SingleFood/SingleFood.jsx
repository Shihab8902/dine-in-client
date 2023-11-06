import React from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom'
import loadingAnimation from '../../assets/images/cooking.gif'

const SingleFood = () => {
    const { data } = useLoaderData();
    const { image, name, category, foodOrigin, description, username, userEmail, price } = data;
    console.log(data);



    return <div>
        <Helmet>
            <title>{name}</title>
        </Helmet>

        {
            data ? <div className='flex gap-6 flex-col items-center lg:flex-row my-10 '>

                <div className='flex-1 '>
                    <img src={image} className='h-full block w-full rounded-lg' alt={name} />
                </div>

                <div className='flex-1'>
                    <h3 className='font-bold text-3xl md:text-4xl'>{name}</h3>
                    <div className='mt-5'>
                        <p className='border-2 border-orange-500 inline px-5 py-0 bg-gray-200  font-semibold rounded-full text-lg'>{category}</p>
                    </div>
                    <p className='my-5 text-gray-500 leading-8'>{description}</p>
                    <p className='font-semibold'>Food origin: <span className='font-normal '>{foodOrigin}</span></p>
                    <p className='font-semibold my-3'>Made by: <span className='font-normal'>{username} ({userEmail})</span> </p>
                    <p className='font-semibold font-sans text-3xl'>${price}</p>
                    <button className='w-full mt-5 text-white font-semibold rounded-lg uppercase bg-orange-500 py-4'>Order now</button>
                </div>
            </div>
                :
                <div className='flex flex-col items-center justify-center'>
                    <img className=' w-80' src={loadingAnimation} alt="" />
                    <p className='text-2xl font-bold text-center'>Cooking....</p>
                </div>
        }
    </div>
}

export default SingleFood