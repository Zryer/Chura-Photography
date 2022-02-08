import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sakura from '../../Images/sakuraHome.png';

const About = () => {
    return (
        <Container className="aboutContainer" fluid>
            <Row className="aboutRow">
                <Col className="aboutCol">
                    <img src={Sakura} alt="Sakura" className="aboutImage" />
                </Col>
                <Col className=" aboutCol">
                    <h1 className="aboutContent">Hello I'm Sakura</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About;