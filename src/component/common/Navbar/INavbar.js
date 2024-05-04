import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ALL_PRODUCTS_VIEW_PATH, COUNTER_PATH} from "../../../routes/routes";

function INavbar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="me-4" to={ALL_PRODUCTS_VIEW_PATH} >Products</Link>
                        <Link to={COUNTER_PATH} >Counter</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default INavbar;
