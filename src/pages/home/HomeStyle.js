import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HomeContainer = styled.div`
  background-image: url('https://www.laprogressive.com/wp-content/uploads/2021/04/GettyImages-1215836494.jpeg');
  background-repeat: no-repeat;
  filter: brightness(110%);
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: #00ff7f;
  text-shadow: 10px 10px 2px rgba(10, 10, 10, 1);;
  filter: brightness(100%);
  font-family: Georgia, serif;
  font-size: 7rem;
  
`;
export const HomeButton = styled(Link)`
  padding : 10px;
  width :350px;
  background-color : rgba(256, 256, 256, 0.4);
  color:#052349;
  font-size:25px;
  font-weight:bold;
  border: 3px solid #00ff7f;
  border-radius:9px;
  text-decoration:none;
  text-align : center;
  transition : ease-in-out 5s
`;