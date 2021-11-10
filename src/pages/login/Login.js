import React from 'react';
import { useHistory } from "react-router-dom";
import {useContext} from "react"
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
    const {data,setData, email, setEmail,password , setPassword,code, setCode} = useContext(LoginContexts)
    const history = useHistory();

    async function login(e){
        e.preventDefault()
        let item = {email, password, code}
        let result = await fetch("http://159.89.214.246:4100/api/v1/login",{
            method : "POST",
            headers:{
              "Content-Type" : "application/json",
              "Accept":"application/json"
            },
            body : JSON.stringify(item)
        })
        result = await result.json()
        console.log(data, result)
        if (result.succeed){
            setData(result.data.token) // if login is successful, s
            history.push("/Dashboard"); // for redirect to Dashboard
        }else{
           return alert(result.message.toUpperCase())
        }
        
        
        
        // result = await result.json() ;
        // localStorage.setItem("user-info",JSON.stringify(item))
        // history.push("/enter")
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