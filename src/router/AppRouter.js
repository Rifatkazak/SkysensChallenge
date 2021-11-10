import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Dashboard from "../pages/dashboard/Dashboard"
import Navbar from "../components/Navbar/Navbar";


function AppRouter(){
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/Login" exact component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/Dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter ;