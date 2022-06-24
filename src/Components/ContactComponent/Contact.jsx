import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navi from '../NavbarComponent/Navbar';
import { FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <Navi />
            <Container className="contactContainer" fluid>
                <Row>
                    <Col xs={12}>
                        <h1 className="contactTitle">Shoot me a message!</h1>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }} >
                    <Col xs="6" className="formCol">
                        <Form action="https://getform.io/f/a2b398a2-c5e5-4833-9550-8fc08a35bc7f" method="POST" encType="multipart/form-data">
                            <Form.Group>
                                <FloatingLabel label="Name" className="floatLabel">
                                    <Form.Control type="text" id="name" name="name" placeholder="Name" required className="formInput" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Email" className="floatLabel">
                                    <Form.Control type="email" id="email" name="email" placeholder="Email" required className="formInput" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Phone Number" className="floatLabel">
                                    <Form.Control type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="formInput" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Message" className="floatLabel">
                                    <Form.Control as="textarea" id="message" name="message" placeholder="Message" className="formInput" />
                                </FloatingLabel>
                            </Form.Group>
                            <Col className="d-grid">
                                <Button variant="primary" type="submit" className="formButton">
                                    Send Message
                                </Button>
                            </Col>
                        </Form>
                    </Col>

                    <Col xs="12" style={{ display: "flex", justifyContent: "center"}}>
                        <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactInsta" target="_blank" rel="noreferrer"><i className="fab fa-instagram contactIcon"></i></a>
                        <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope contactIcon"></i></a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;