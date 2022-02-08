import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sakura from '../../Images/sakuraHome.png';

const About = () => {
    return (
        <Container className="aboutContainer" fluid>
            <Row className="aboutRow">
                <Col className="p-0 aboutCol">
                    <img src={Sakura} className="aboutImage" />
                </Col>
                <Col className="p-0 aboutCol">
                    <h1 className="aboutContent noPadding">Hello I'm Sakura</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About;