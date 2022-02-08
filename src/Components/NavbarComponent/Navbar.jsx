import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navi = () => {
    return (
            <Navbar collapseOnSelect bg="light" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="" className="navbarBrand">Chura Photography</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar">
                            <Nav>
                                <Nav.Link href="/"><Link to="" className="navLinks">Home</Link></Nav.Link>
                                <Nav.Link href="About"><Link to="About" className="navLinks">About</Link></Nav.Link>
                                <Nav.Link href="Photos"><Link to="Photos" className="navLinks">Photos</Link></Nav.Link>
                                <Nav.Link href="Contact"><Link to="Contact" className="navLinks">Contact</Link></Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navi;