import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Intro = () => {
    return (
        <Container className="introContainer" id="Intro">
            <Row>
                <Col>
                    <h1>Hello</h1>
                    <Button>Button doing things</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;