import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { PHOTOSLIST } from './PhotosList';

const PhotoIndex = () => {
    return (
        <Container fluid>
            <Row>
                {PHOTOSLIST.map(obj => {
                    return (
                        <Col key={obj.id}>
                            <Link to={`/Photos/${obj.name}`}>
                                <Col>
                                    <h2>{obj.name}</h2>
                                    <img src={obj.image} alt={obj.alt} />
                                </Col>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default PhotoIndex;