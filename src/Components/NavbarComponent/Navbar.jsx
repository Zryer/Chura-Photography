import React from 'react';
import { Container, Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleUser, faCamera, } from '@fortawesome/free-solid-svg-icons';



const Navi = () => {
    return (
        <Navbar collapseOnSelect bg="light" sticky="top" expand="lg" id="navi" className="fullNavbar">
            <Container fluid className="containerNavbar">
                <Navbar.Brand className="navbarBrand"><Link to="/Chura-Photography/" className="navbarBrandText">Chura Photography</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarButton" />
                <Navbar.Collapse id="responsive-navbar-nav" className="openNavbar">
                    <Nav>
                        <Link to="/Chura-Photography/About" className="navLinks"><Col className="navLinkCol"><FontAwesomeIcon icon={faCircleUser} /><div>About</div></Col></Link>
                        <Link to="/Chura-Photography/Photos" className="navLinks"><Col className="navLinkCol"><FontAwesomeIcon icon={faCamera} /><div>Photos</div></Col></Link>
                        <Link to="/Chura-Photography/Contact" className="navLinks"><Col className="navLinkCol"><FontAwesomeIcon icon={faPhone} /><div>Contact</div></Col></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi;