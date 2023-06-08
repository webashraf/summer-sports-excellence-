import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    const { signInWithGoogle, user } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                const signInUser = res.user;
                const user = {name: signInUser.displayName, email: signInUser.email, photoUrl: signInUser.photoURL}
                axios.post(`http://localhost:5000/users`, user)
                    .then(res => console.log(res.data))
            })
    }
    return (
<button className="btn btn-block bg-[#f4f4f4] shadow-2xl font-bold text-xl -tracking-tight" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle><span className="-ml-[6px] ">oogle</span></button>
    );
};

export default SocialLogin;