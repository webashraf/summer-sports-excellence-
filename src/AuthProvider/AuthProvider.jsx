import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';

export const ContextProvider = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoUrl) => {
        setLoading(true);
       return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const loginUserWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentlyLoginUser => {
            setUser(currentlyLoginUser);
            // console.log(currentlyLoginUser);
            if (currentlyLoginUser) {
                axios.post(`https://a12-server-eight.vercel.app/jwt`, {email: currentlyLoginUser.email})
                .then(result => {
                    // console.log(result.data);
                    localStorage.setItem('accessToken', result.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('accessToken');
                setLoading(false);
            }
        })


        return () => {
            return unSubscribe();
        }

    }, [])


    const authInfo = {
        user, createUserWithEmailAndPass, updateUserProfile, signOutUser, loginUserWithEmailPass, signInWithGoogle, loading
    }



    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;