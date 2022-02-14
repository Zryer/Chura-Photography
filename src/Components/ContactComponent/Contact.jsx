import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container className="contactContainer" fluid>
            <Row className="contactRow">
                <Col xs={12}>
                    <h1 className="contactTitle">Follow For More!</h1>
                </Col>
                <Col xs={6}>
                    <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactInsta" target="_blank" rel="noreferrer"><i className="fab fa-instagram contactIcon"></i></a>
                    <div><a href="https://www.instagram.com/chura_photography/?hl=en" className="instaCaption">Instagram</a></div>
                </Col>
                <Col xs={6}>
                    <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope-open contactIcon"></i></a>
                    <div><a href="https://www.instagram.com/chura_photography/?hl=en" className="mailCaption">Mail</a></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;