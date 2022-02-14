import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navi = () => {
    return (
            <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" id="navi">
                <Container fluid>
                    <Navbar.Brand><Link to="/" className="navbarBrand">Chura Photography</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar">
                            <Nav>
                                <Nav.Link eventKey="1"><Link to="About" className="navLinks">About</Link></Nav.Link>
                                <Nav.Link eventKey="2"><Link to="Photos" className="navLinks">Photos</Link></Nav.Link>
                                <Nav.Link eventKey="3"><Link to="Contact" className="navLinks">Contact</Link></Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navi;