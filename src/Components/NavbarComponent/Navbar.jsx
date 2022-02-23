import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleUser, faCamera, } from '@fortawesome/free-solid-svg-icons';



const Navi = () => {
    return (
        <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" id="navi" className="fullNavbar">
            <Container fluid className="containerNavbar">
                <Navbar.Brand className="navbarBrand"><Link to="/" className="navbarBrandText">Chura Photography</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarButton" />
                <Navbar.Collapse id="responsive-navbar-nav" className="openNavbar">
                    <Nav>
                        <Link to="/About" className="navLinks"><FontAwesomeIcon icon={faCircleUser} className="navLinkIcon" /><div className="navLinkTitle">About</div></Link>
                        <Link to="/Photos" className="navLinks"><FontAwesomeIcon icon={faCamera} className="navLinkIcon" /><div className="navLinkTitle">Photos</div></Link>
                        <Link to="/Contact" className="navLinks"><FontAwesomeIcon icon={faPhone} className="navLinkIcon" /><div className="navLinkTitle">Contact</div></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi;