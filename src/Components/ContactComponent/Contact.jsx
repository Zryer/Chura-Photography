import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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

                    <Col xs="5" className="smallCol">
                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={6} className="left"><a href="https://www.instagram.com/chura_photography/?hl=en" className="contactInsta" target="_blank" rel="noreferrer"><i className="fab fa-instagram contactIcon"></i></a></Col>
                                    <Col xs={6} className="right"><div className="instaCaption">Instagram</div></Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={6} className="left"><a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope-open contactIcon"></i></a></Col>
                                    <Col xs={6} className="right"><div className="mailCaption">Mail</div></Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <a href="https://www.instagram.com/chura_photography/?hl=en" className="contactMail" target="_blank" rel="noreferrer"><i className="fas fa-envelope-open contactIcon"></i></a>
                                <div className="mailCaption">Mail</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs="7">
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col xs={12}><Form.Label className="formLabel">Name</Form.Label></Col>
                                    <Col xs={6}><Form.Control type="text" /><Form.Text>First Name</Form.Text></Col>
                                    <Col xs={6}><Form.Control type="text" /><Form.Text>Last Name</Form.Text></Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col xs={12}><Form.Label className="formLabel">Email</Form.Label></Col>
                                    <Col xs={12}><Form.Control type="email" /><Form.Text>Email</Form.Text></Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col xs={12}><Form.Label className="formLabel">Message</Form.Label></Col>
                                    <Col xs={12}><Form.Control as="textarea" /><Form.Text>Leave a message below for me</Form.Text></Col>
                                </Row>
                            </Form.Group>
                            <Row>
                                <Col xs={12}>
                                    <Button variant="primary" type="submit" className="formLabel">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Contact;