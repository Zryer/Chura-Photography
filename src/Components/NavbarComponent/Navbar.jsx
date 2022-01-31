import React from 'react';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';


const Navi = () => {
    return (
        <>
            <Welcome />
            <Navbar expand={false} bg="light" sticky="top" className="navi">
                <Container fluid>
                    <Navbar.Brand href="#" className="navbarBrand">Sakura Wilson</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Look Around</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="offCanvasBody">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#Photos">Photos</Nav.Link>
                                <Nav.Link href="#Contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            </>
    )
}

export default Navi;