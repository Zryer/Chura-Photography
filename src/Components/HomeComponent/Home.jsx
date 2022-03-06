import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from '../WelcomeComponent/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Welcome />
            <Container fluid className="homeContainer" id="home">
                <Row className="homeRow">
                    <Col className="mainContainer">
                    <Col className="homeDivName" xs={12}>
                        <h1 className="homeName">Sakura Wilson</h1>
                    </Col>
                    <Col className="homeDivText" xs={12}>
                        <p className="homeText">Aspiring photographer in Oahu</p>
                    </Col>
                    <Col className="homeDivLinks" xs={12}>
                        <Link to="/Chura-Photography/About" className="homeLinks">About</Link>
                        <Link to="/Chura-Photography/Photos" className="homeLinks">Photos</Link>
                        <Link to="/Chura-Photography/Contact" className="homeLinks">Contact</Link>
                    </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;