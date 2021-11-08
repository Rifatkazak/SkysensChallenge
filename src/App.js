import './App.css';
import LoginProvider from "./context/LoginContext"
import Login from "./pages/login/Login"

function App() {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
        );
}
export default App;