import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';



const axiosSecure = axios.create({
    baseURL: 'https://a12-server-eight.vercel.app'
});

const useAxiosSecure = () => {
const navigate = useNavigate();
const {signOutUser} = useAuth();



useEffect(()=> {
    axiosSecure.interceptors.request.use(
        (config) =>{
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );


    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response && (error.response.status ===401 || error.response.status === 403)) {
                await signOutUser();
                navigate('/login')
            }
            return Promise.reject(error);
        }
    );


},[navigate, signOutUser])

return [axiosSecure];

};

export default useAxiosSecure;