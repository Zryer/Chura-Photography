import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';

const Home = () => {
    return (
        <>            
            <Welcome />
            <Container fluid className="homeContainer" id="Home">
                <Row>
                    <Col className="homeDiv">
                        <Col className="homeText">Get To Know Me Below</Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;