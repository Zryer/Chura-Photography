import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Welcome />
            <Container fluid className="homeContainer" id="home">
                <Row>
                    <Col className="testContainer">
                    <Col className="homeDivName" xs={12}>
                        <h1 className="homeName">Sakura Wilson</h1>
                    </Col>
                    <Col className="homeDivText" xs={12}>
                        <p className="homeText">Aspiring photographer in Oahu</p>
                    </Col>
                    <Col className="homeDivLinks" xs={12}>
                        <Link to="About" className="homeLinks">About</Link>
                        <Link to="Photos" className="homeLinks">Photos</Link>
                        <Link to="Contact" className="homeLinks">Contact</Link>
                    </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;