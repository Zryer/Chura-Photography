import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navi = () => {
    return (
            <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" id="navi" className="fullNavbar">
                <Container fluid className="containerNavbar">
                    <Navbar.Brand className="navbarBrand"><Link to="/" className="navbarBrandText">Chura Photography</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarButton"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="openNavbar">
                            <Nav>
                                <Nav.Link eventKey="1" tabIndex={-1}><Link to="/About" className="navLinks">About</Link></Nav.Link>
                                <Nav.Link eventKey="2" tabIndex={-1}><Link to="/Photos" className="navLinks">Photos</Link></Nav.Link>
                                <Nav.Link eventKey="3" tabIndex={-1}><Link to="/Contact" className="navLinks">Contact</Link></Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navi;