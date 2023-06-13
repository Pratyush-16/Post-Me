import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children})=> {

    const localStorageToken = JSON.parse(localStorage.getItem("login"));

    const [token,setToken] = useState(localStorageToken?.token)
    const[user,setUser] = useState(localStorageToken?.user)

    return (
        <AuthContext.Provider  value={{token,setToken,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);