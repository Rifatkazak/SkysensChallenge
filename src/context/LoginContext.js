import React from 'react'
import { createContext, useState } from 'react'

export const LoginContexts = createContext()

function LoginProvider({children}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [data, setData] = useState({});
    const [getdata, setGetdata] = useState([]);

    const values ={data,setData, email, setEmail,password , setPassword, code, setCode,getdata, setGetdata}
    
    return (
        <LoginContexts.Provider value = {values}>
            {children}
        </LoginContexts.Provider>
    )
}
export default LoginProvider