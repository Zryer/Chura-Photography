import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sakura from '../../Images/sakuraHome.webp';
import Navi from '../NavbarComponent/Navbar';

const About = () => {
    return (
        <>
            <Navi />
            <Container className="aboutContainer" fluid>
                <Row>
                    <Col className="aboutCol">
                        <img src={Sakura} alt="Sakura" className="aboutImage" />
                    </Col>
                </Row>
                <Row>
                    <Col className="aboutTitle">
                        Learn some things about me!
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="aboutContent">Hello! My name is Sakura and I am a photographer based in Oahu, Hawaii. I'm a military child who loves to travel and explore many different places. I currently work at a Starbucks, so I enjoy using photography as a creative outlet when I'm not working. I'm a beginner at photography, so I am interested in trying out many different styles. I want to improve my skills and hopefully expand my network to photograph more people and locations!</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;