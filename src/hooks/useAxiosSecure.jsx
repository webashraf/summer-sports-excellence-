import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';
import { useEffect } from "react";



const axiosSecure = axios.create({
    baseUrl: 'http://localhost:5000'
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