import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { PHOTOSLIST } from './PhotosList';

const PhotoIndex = () => {
    return (
        <Container className="photoIndexContainer" fluid>
            <Row>
                {PHOTOSLIST.map(obj => {
                    return (
                        <Col key={obj.id} sm={12} md={6} lg={6} className="photoDiv">
                            <Link to={`/Photos/${obj.name}`} tabIndex={-1}>
                                <Figure>
                                    <Figure.Image
                                        alt={obj.alt}
                                        src={obj.image}
                                        className="photos"
                                    />
                                </Figure>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default PhotoIndex;