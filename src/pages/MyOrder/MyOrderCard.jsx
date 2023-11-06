import React from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs';

const MyOrderCard = ({ order }) => {
    const { image, name, price, purchaseQty, addedTime, addedBy } = order;

    const purchaseDate = addedTime.split("GMT")[0];



    return <div>
        <div className=' border rounded-lg '>
            <img className='w-full h-[260px] rounded ' src={image} alt="" />
            <div className='p-3'>
                <h4 className='font-bold text-2xl my-5'>{name}</h4>
                <ul className='space-y-2'>
                    <li className='font-semibold'>Prepared by: <span className='font-normal'>{addedBy}</span></li>
                    <li className='font-semibold'>Purchase on: <span className='font-normal font-sans'>{purchaseDate}</span></li>
                    <li className='font-semibold'>Purchase quantity: <span className='font-normal font-sans'>{purchaseQty}</span></li>
                    <li className='font-semibold'>Price: <span className='font-normal font-sans'>${price}</span></li>
                </ul>
                <div className='text-right'>
                    <button className='text-3xl text-red-500'><BsFillTrash3Fill /></button>
                </div>
            </div>
        </div>
    </div>
}

export default MyOrderCard