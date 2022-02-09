import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container fluid className="welcomeContainer">
            <Row>
                <Col className="welcomeDiv">
                    <Col className="welcomeTitle">Chura Photography</Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;