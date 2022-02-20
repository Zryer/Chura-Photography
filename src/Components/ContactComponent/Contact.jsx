import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navi from '../NavbarComponent/Navbar';

const Contact = () => {
    return (
        <>
        <Navi/>
        <Container className="contactContainer" fluid>
            <Row className="contactRow">
                <Col xs={12}>
                    <h1 className="contactTitle">Follow For More!</h1>
                </Col>
                <Col xs={6}>
                    <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactInsta" target="_blank" rel="noreferrer"><i className="fab fa-instagram contactIcon"></i></a>
                    <div className="instaCaption">Instagram</div>
                </Col>
                <Col xs={6}>
                    <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope-open contactIcon"></i></a>
                    <div className="mailCaption"> Mail</div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact;