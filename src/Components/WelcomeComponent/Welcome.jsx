import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container fluid className="welcomeContainer position-absolute top-50 start-50 translate-middle">
            <Row>
                <Col className="welcomeDiv">
                    <Col className="welcomeTitle">Chura Photography</Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;