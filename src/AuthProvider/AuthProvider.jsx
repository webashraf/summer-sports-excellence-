import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';

export const ContextProvider = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUserWithEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        })
    }

    const loginUserWithEmailPass = (email, password) => {
         return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
       return signOut(auth)
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })


        return () => {
            return unSubscribe();
        }

    }, [])
    const authInfo = {
        user, createUserWithEmailAndPass, updateUserProfile, signOutUser, loginUserWithEmailPass
    }

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;