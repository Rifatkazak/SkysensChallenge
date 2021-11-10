import './App.css';
import LoginProvider from "./context/LoginContext"
import Login from "./pages/login/Login"
import AppRouter from './router/AppRouter';

function App() {
  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider>
        );
}
export default App;