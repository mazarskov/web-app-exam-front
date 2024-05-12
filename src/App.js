import INavbar from "./component/common/Navbar/INavbar";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import LoginView from './view/LoginView';
import { UserProvider } from "./data/UserProvider";
import './App.css';


function App() {


    return (
        <div className="App">
        <UserProvider>
            <Container>                
                <Outlet></Outlet>
            </Container>
        </UserProvider>
        </div>
    );
}

export default App;
