import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
background-color: #055349;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction:column;
height:100%;
min-height:100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
`;

export const Cards = styled.div`
font-family: 'Dongle', sans-serif;
font-size:30px;

min-width:21%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
background-color: rgba(253,253,150,0.9);
border-radius: 55px;
color:#052349;
box-shadow: 3px 3px 5px #AB7747;
margin: 1rem;
margin-bottom:2rem;
height:20rem;
box-shadow: 5px 7px 10px 9px rgba(0, 0, 0, 0.81);
  
`;
export const Title = styled.div`
font-size:25px;
text-align :center;
`;
export const Time = styled.div`
  font-size:2.5rem;
  display:flex;
  width:100%;
  margin:auto;
  justify-content:space-around;
  
  
`;

export const Description = styled.div`
  font-size:2.5rem;
  list-style:none;
  text-decoration : none;
  display :flex;
  width:100%;
  margin:auto;
  justify-content : space-around;
  align-items:flex-start;

`;
export const DescriptionItem = styled.p`
  margin : 0px auto;
`;


export const ButtonContainer = styled.div`
  width:30%;
  margin:auto;
  display :flex;
  margin-top:4rem;
  margin-bottom:2.5rem;
  justify-content : space-between;
`;
export const LiveDate = styled.div`
  width:30%;
  display :flex;
  font-size:50px;
  justify-content : space-between;
`;
export const HomeButton = styled(Link)`
  padding : 10px;
  font-family: 'Dongle', sans-serif;
  font-size:50px;
  margin-left:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  width :%30;
  height:80px;
  background-color : rgba(253,253,150,0.7);
  color:#052349;
  border: 6px solid #fff;
  border-radius:9px;
  text-decoration:none;
  text-align : center;
  transition : ease-in-out 0.3s
`;


