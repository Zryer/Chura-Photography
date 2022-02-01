import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';



const Navi = () => {
    return (
            <Navbar collapseOnSelect bg="light" fixed="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="navbarBrand">Sakura Wilson</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbar" className="navbar">
                            <Nav className="offCanvasBody">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#Photos">Photos</Nav.Link>
                                <Nav.Link href="#Contact">Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navi;