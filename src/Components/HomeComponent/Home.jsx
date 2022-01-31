import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
    return (
        <Container className="homeContainer" id="Home" fluid>
            <Row>
                <Col>
                    <h1>Hello</h1>
                    <Button>Button doing things</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;