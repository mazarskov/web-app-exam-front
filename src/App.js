import INavbar from "./component/common/Navbar/INavbar";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import LoginView from './view/LoginView';
import { UserProvider } from "./data/UserProvider";


function App() {


    return (
        <>
        <UserProvider>
            <Container>                
                <Outlet></Outlet>
            </Container>
        </UserProvider>
        </>
    );
}

export default App;
