import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container fluid className="position-absolute top-50 start-50 translate-middle welcomeContainer">
            <Row>
                <Col>
                    <h1 className="position-absolute top-50 start-50 translate-middle">Welcome</h1>    
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;