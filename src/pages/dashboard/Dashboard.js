import {useContext} from "react"
import { LoginContexts } from '../../context/LoginContext';

import {
    Container,
    CardContainer,
    Title,
    Cards,
    Description,
    Time,ButtonContainer,
    HomeButton,
    DescriptionItem,
    LiveDate
  } from './DashboardStyle';

const Dashboard = () => {
    const {data,getdata, setGetdata } = useContext(LoginContexts)
    
    async function getData(e){
        e.preventDefault();
        let result = await fetch("http://159.89.214.246:4100/api/v1/skysens/datas/device",{
            method : "POST",
            headers:{
              "x-skysens-auth": `${data}`,
              "Content-Type" : "application/json",
            },
            body : JSON.stringify({"dataType" : "parsed", "page":"1","limit":"1000","deviceType":"SKYCLD1"})
        })
        result = await result.json()
        setGetdata(result.data)
        console.log(result)
        console.log(getdata)

    }
    const getTime = (time) => {
        let date = new Date(time)
        console.log(date)
        return date
    }

    return (
        <Container>
            <ButtonContainer>
                <HomeButton to="/login">LOGOUT </HomeButton>
                <HomeButton onClick={getData}>GETDATA</HomeButton>
            </ButtonContainer>
            <CardContainer>
            {getdata.map((item,index) => (
                <Cards key= {index}>
                    <Title>
                        <h2>{item.name}</h2>
                    </Title>
                    <Description> 
                        < DescriptionItem>Sıcaklık : {item.data.temperature}°C</ DescriptionItem>
                        < DescriptionItem>Nem : { item.data.humidity} %</ DescriptionItem>
                    </Description>
                    <Time>
                        <p>Time  : {item.createdAt.slice(11,19)}</p> 
                       <p>Date : {item.createdAt.slice(0,10)}</p> 
                    </Time>
                </Cards> 
            ))}
            </CardContainer>
        </Container>
        
    )
}

export default Dashboard ;