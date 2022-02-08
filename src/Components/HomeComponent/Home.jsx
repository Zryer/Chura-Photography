import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment className="home"> 
            <Welcome />
            <Container fluid className="homeContainer">
                <Row>
                    <Col className="homeDiv">
                        <Link to="About" className="homeText">Click to get to know me</Link>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home;