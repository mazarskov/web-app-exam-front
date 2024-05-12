import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CATALOGUE_PATH, BASKET_PATH, ACCOUNT_PATH} from "../../../routes/routes";
import "./INavbar.css"

function INavbar() {

    return (
        <Navbar expand="lg">
            <Container className="navigation">
                <Navbar.Brand href="/test">Stim</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={CATALOGUE_PATH} className="buttons">Games</Link>
                        <Link to={BASKET_PATH} className="buttons">Basket</Link>
                        <Link to={ACCOUNT_PATH} className="buttons">Account</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default INavbar;