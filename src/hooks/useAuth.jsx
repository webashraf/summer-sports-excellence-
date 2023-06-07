import { useContext } from "react";
import { ContextProvider } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(ContextProvider);
    return auth;
};

export default useAuth;