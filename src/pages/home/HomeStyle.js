import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HomeContainer = styled.div`
  background-image: url('https://media-exp1.licdn.com/dms/image/C4D1BAQHS0y2n-Bb_yA/company-background_10000/0/1574949786879?e=2159024400&v=beta&t=brT-5reSIAKIz2-oKhI_w9T_OlvfmlVdblkXV7ORIh4');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: white;
  font-family: 'Girassol', sans-serif;
  font-size: 3rem;
  color:rgba(70, 28, 12)
  
`;
export const HomeButton = styled(Link)`
  padding : 10px;
  width :250px;
  background-color : #0050ff;
  color:white;
  font-size:20px;
  border: 3px solid #0050ff;
  border-radius:9px;
  text-decoration:none;
  text-align : center;
  transition : ease-in-out 0.3s
`;