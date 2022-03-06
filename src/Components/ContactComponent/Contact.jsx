import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navi from '../NavbarComponent/Navbar';

const Contact = () => {
    return (
        <>
            <Navi />
            <Container className="contactContainer" fluid>
                <Row>
                    <Col xs={12}>
                        <h1 className="contactTitle">Reach Me With These!</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs="4" className="formCol">
                        <Form action="https://getform.io/f/a2b398a2-c5e5-4833-9550-8fc08a35bc7f" method="POST" encType="multipart/form-data">
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="name">Name *</Form.Label>
                                <Form.Control type="text" id="name" name="name" required className="nameFormControl" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="email">Email *</Form.Label>
                                <Form.Control type="email" id="email" name="email" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="phoneNumber">Phone Number</Form.Label>
                                <Form.Control type="tel" id="phoneNumber" name="phoneNumber" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="message">Message</Form.Label>
                                <Form.Control as="textarea" id="message" name="message" />
                            </Form.Group>
                            <Col className="d-grid">
                            <Button variant="primary" type="submit" className="formButton">
                                Send Message
                            </Button>
                            </Col>
                        </Form>
                    </Col>

                    <Col xs="">
                        <Col>
                            <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactInsta" target="_blank" rel="noreferrer"><i className="fab fa-instagram contactIcon"></i></a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope contactIcon"></i></a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;