import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" id="navi" className="fullNavbar">
                <Navbar.Brand className="navbarBrand"><Link to="/Chura-Photography/" className="navbarBrandText">Chura Photography</Link></Navbar.Brand>
                <Navbar.Toggle className="navbarButton" />
                <Navbar.Collapse className="openNavbar">
                    <Nav>
                        <Link to="/Chura-Photography/About" className="navLinks">About</Link>
                        <Link to="/Chura-Photography/Photos" className="navLinks">Photos</Link>
                        <Link to="/Chura-Photography/Contact" className="navLinks">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;