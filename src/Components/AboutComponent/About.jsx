import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sakura from '../../Images/sakuraHome.png';
import Navi from '../NavbarComponent/Navbar';

const About = () => {
    return (
        <>
        <Navi/>
        <Container className="aboutContainer" fluid>
            <Row className="aboutRow">
                <Col className="aboutCol">
                    <img src={Sakura} alt="Sakura" className="aboutImage" />
                </Col>
            </Row>
            <Row className="aboutRow">
            <Col className="aboutCol" xs={6}>
                    <h1 className="aboutContent">Hello</h1>
                </Col>
                <Col className="aboutCol">
                    <h1 className="aboutContent">Hello</h1>
                </Col>
            </Row>
            <Row className="aboutRow">
            <Col className="aboutCol">
                    <h1>Hello</h1>
                </Col>
                <Col className="aboutCol">
                    <h1>Hello</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About;