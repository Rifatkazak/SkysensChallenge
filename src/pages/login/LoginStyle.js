import styled from 'styled-components';
export const LoginContainer = styled.div`
  background-image: url('https://www.techrepublic.com/a/hub/i/r/2019/02/11/45118c7c-73e1-49d5-a87e-46a93c52c2dc/resize/1200x/6ac1c0e86ecf9a9a24da9d434ca451c8/istock-957654516.jpg');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  width: 600px;
  min-width: 600px;
  height: 600px;
  background-color: rgba(0, 42, 132, 0.5);
  border-radius: 50%;
  border: 2px solid #E1F1DD;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Header = styled.h1`
  color: white;
  font-family: 'Girassol', sans-serif;
  font-size: 3rem;
`;
export const StyledInput = styled.input`
  height: 50px;
  font-size: 1.5rem;
  width: 450px;
  border-radius: 5px;
  font-family: 'Girassol', sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent:20px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledButton = styled.button`
  font-size: 2rem;
  height: 50px;
  border-radius: 5px;
  font-family: 'Girassol', sans-serif;
  background-color: rgba(254, 248, 216, 0.6);
  color: rgba(0, 42, 132);
  border: none;
  cursor: pointer;
  margin: 1rem;
`;
export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;