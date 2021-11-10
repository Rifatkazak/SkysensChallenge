import {useContext} from "react"
import { LoginContexts } from '../../context/LoginContext';

import {
    Header,
    HomeContainer,
    HomeButton,
    CardContainer,
    ButtonContainer,
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
    return (
        <HomeContainer>
            <Header></Header>
            <div>{getdata.map((item,index) => (
                <div key= {index}>
                    <li>{item.name}</li>
                    <li>{item.createdAt}</li>
                    <li>{item.data.temperature}</li>
                    <li>{item.data.humidity}</li>
                </div>
            ))}</div>
            <ButtonContainer>
            <HomeButton to="/login">LOGOUT </HomeButton>
            <HomeButton onClick={getData}>GETDATA</HomeButton>
            </ButtonContainer>
            
        </HomeContainer>
        
    )
}

export default Dashboard ;