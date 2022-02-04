import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="aboutContainer" fluid>
            <Row>
                <Col>
                    <h1>Hello</h1>
                    <Button>Button doing things</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default About;