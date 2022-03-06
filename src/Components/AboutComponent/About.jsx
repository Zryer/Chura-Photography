import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sakura from '../../Images/sakuraHome.png';
import Navi from '../NavbarComponent/Navbar';

const About = () => {
    return (
        <>
            <Navi />
            <Container className="aboutContainer" fluid>
                <Row className="aboutRow1">
                    <Col className="aboutCol">
                        <img src={Sakura} alt="Sakura" className="aboutImage" />
                    </Col>
                </Row>
                <Row className="aboutRow2">
                    <Col className="aboutCol">
                        <h1 className="aboutContent">Image</h1>
                    </Col>
                    <Col className="aboutCol">
                        <h1 className="aboutContent">Biography</h1>
                    </Col>
                </Row>
                <Row className="aboutRow3">
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