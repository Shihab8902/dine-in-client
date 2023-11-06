import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: "http://localhost:9000",
    withCredentials: true
});

const useAxiosSecure = () => {

    const { logOutUser } = useContext(UserContext);
    const navigate = useNavigate();


    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.response?.status === 401 || error?.response.status === 403) {

                logOutUser()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error));
            }
        })
    }, [])


    return axiosSecure;
}

export default useAxiosSecure