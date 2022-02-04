import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <> 
            <Welcome />
            <Container fluid className="homeContainer">
                <Row>
                    <Col className="homeDiv">
                        <Link to="About" className="homeText">Click to get to know me</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;