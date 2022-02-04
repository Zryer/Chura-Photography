import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navi = () => {
    return (
            <Navbar collapseOnSelect bg="light" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="" className="navbarBrand">Chura Photography</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbar" className="navbar">
                            <Nav>
                                <Link to="" className="navLinks">Home</Link>
                                <Link to="About" className="navLinks">About</Link>
                                <Link to="Photos" className="navLinks">Photos</Link>
                                <Link to="Contact" className="navLinks">Contact</Link>
                            </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navi;