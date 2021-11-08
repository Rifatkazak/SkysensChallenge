import React from 'react'
import { createContext, useState } from 'react'

export const LoginContexts = createContext()

function LoginProvider({children}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const values ={email, setEmail,password , setPassword, code, setCode}
    return (
        <LoginContexts.Provider value = {values}>
            {children}
        </LoginContexts.Provider>
    )
}
export default LoginProvider