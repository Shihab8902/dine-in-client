import React, { useContext } from 'react'
import { UserContext } from '../context/AuthProvider'

import loadingAnimation from '../assets/images/cooking.gif';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div className='flex flex-col items-center justify-center mb-20'>
            <img className=' w-80' src={loadingAnimation} alt="" />
            <p className='text-2xl font-bold text-center'>Cooking....</p>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>



}

export default PrivateRoute