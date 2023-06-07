import { createContext, useState } from "react";


export const ContextProvider = createContext();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('Tamim')






    const authInfo = {
        user,
    }

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;