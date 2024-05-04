import INavbar from "./component/common/Navbar/INavbar";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";


function App() {


    return (
        <>
            <INavbar/>
            <Container>
                <Outlet></Outlet>
            </Container>

        </>

    );
}

export default App;
