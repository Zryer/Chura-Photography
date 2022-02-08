import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { PHOTOSLIST } from './PhotosList';

const PhotoIndex = () => {
    return (
        <Container fluid>
            <Row>
                {PHOTOSLIST.map(obj => {
                    return (
                        <Col key={obj.id} xs={4} className="photoDiv">
                            <Link to={`/Photos/${obj.name}`}>
                                <Figure>
                                    <Figure.Image 
                                        width={obj.width}
                                        alt={obj.alt}
                                        src={obj.image}
                                        className="photos"
                                    />
                                    <h1>{obj.name}</h1>
                                    <Figure.Caption>
                                        {obj.name}
                                    </Figure.Caption>
                                    
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