import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sakura from '../../Images/sakuraHome.png';
import Navi from '../NavbarComponent/Navbar';

const About = () => {
    return (
        <>
            <Navi />
            <Container className="aboutContainer" fluid>
                <Row>
                    <Col className="aboutCol">
                        <img src={Sakura} alt="Sakura" className="aboutImage" />
                    </Col>
                </Row>
                <Row>
                    <Col className="aboutCol" xs={6}>
                        <h1 className="aboutContent">Image</h1>
                    </Col>
                    <Col className="aboutCol">
                        <h1 className="aboutContent">Biography</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="aboutCol">
                        <h1 className="aboutContent">Plans for the future</h1>
                    </Col>
                    <Col className="aboutCol">
                        <h1 className="aboutContent">Image</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;