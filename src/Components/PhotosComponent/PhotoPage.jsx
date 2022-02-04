import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PHOTOSLIST } from './PhotosList';

const PhotoPage = () => {
    const { param } = useParams();
    const photo = PHOTOSLIST.find(obj => {
        return obj.name === param
    })

    if (!photo) {
        return (
            <Col>Not Found</Col>
        )
    }

    const { name, image, alt } = photo;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2>{name}</h2>
                    <img src={image} alt={alt} />
                    <h2>Testing</h2>
                </Col>

            </Row>
        </Container>
    )
}

export default PhotoPage;