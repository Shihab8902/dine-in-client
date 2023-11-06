import React, { useContext, useEffect, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { UserContext } from '../../context/AuthProvider';
import { Helmet } from 'react-helmet';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(UserContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/myOrder/?user=${user?.email}`)
            .then(res => setOrders(res.data))
    }, []);







    return <div className='min-h-screen mt-5 mb-10'>

        <Helmet>
            <title>Dinein | My Orders</title>
        </Helmet>


        <h3 className='text-center font-semibold text-4xl'>My Orders</h3> <hr className='w-1/2 mx-auto mt-3' />

        {
            orders.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
                {
                    orders.map(order => <MyOrderCard key={order._id} order={order} />)
                }
            </div>
                :
                <div className='my-20 text-center'>
                    <h3 className='text-4xl text-gray-400 font-semibold'>You don't have and order yet.</h3>
                </div>
        }

    </div>
}

export default MyOrder