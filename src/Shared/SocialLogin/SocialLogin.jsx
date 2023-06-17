import axios from 'axios';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';


const SocialLogin = () => {
    const { signInWithGoogle, user } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                const signInUser = res.user;
                const user = { name: signInUser.displayName, email: signInUser.email, photoUrl: signInUser.photoURL }
                axios.post(`https://a12-server-eight.vercel.app/users`, user)
                    .then(res => console.log(res.data))
            })
    }
    return (
        <button className="btn btn-block bg-[#f4f4f4] shadow-xl font-bold text-md -tracking-tight" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle><span className="-ml-[6px] ">Continue with google</span></button>
    );
};

export default SocialLogin;