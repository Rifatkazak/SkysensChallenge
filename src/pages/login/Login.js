import React, { useEffect } from 'react';
import {useContext} from "react"
import {useHistory} from "react-router-dom"
import { LoginContexts } from '../../context/LoginContext';
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from './LoginStyle';

const Login = () => {
    const {email, setEmail,password , setPassword,code, setCode} = useContext(LoginContexts)
    const history = useHistory();

    async function login(e){
        e.preventDefault()
        console.log(email,password)
        let item = {email, password, code}
        let result = await fetch("http://159.89.214.246:4100/api/v1/login",{
            method : "POST",
            headers : {
                "Content-Type" :"application/json",
                "x-skysens-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExLCJpYXQiOjE1OTAwNTc2ODIsImV4cCI6MjE5NDg1NzY4Mn0.zdSEE6vi1cvhfmr4XWWxucOhFigXxr1oMnN5BP_b0Qo"
            },
            body : JSON.stringify(item)

        });
        result = await result.json() ;
    
    }
  return (
    <LoginContainer>
      <FormContainer>
      <Header>SKYSENS</Header>
        <StyledForm >
          <StyledInput type="text" placeholder="Username" required onChange={(e)=>setEmail(e.target.value)}/>
          <StyledInput type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
          <StyledInput type="number" placeholder="Code" required onChange={(e)=>setCode(e.target.value)}/>
          <StyledButton type="submit" onClick={login}>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};
export default Login;