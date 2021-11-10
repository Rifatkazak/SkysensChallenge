
import {
    Header,
    HomeContainer,
    HomeButton,
  } from './HomeStyle';

const Home = () => {
    return (
        <HomeContainer>
            <Header>WELCOME TO SKYSENS</Header>
            <HomeButton to="/Login">CLICK FOR LOGIN PAGE </HomeButton>
        </HomeContainer>
        
    )
}

export default Home