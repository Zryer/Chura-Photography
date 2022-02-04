import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container className="contactContainer" fluid>
            <Row>
                <Col xs={12}>
                    <h1>Follow For More!</h1>
                </Col>
                <Col className="contactLinks" xs={6}>
                    <h1>This will be a link to Insta</h1>
                </Col>
                <Col className="contactLinks" xs={6}>
                    <h1>This will be a link to Email</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;