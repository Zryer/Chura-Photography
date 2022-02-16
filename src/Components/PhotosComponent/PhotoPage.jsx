import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
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

    const { name, image, alt, width } = photo;

    return (
        <Container className="photoPageContainer" fluid>
            <Row className="photoPageRow">
                <Col>
                    <h2>{name}</h2>
                    <img className={width} src={image} alt={alt} />
                    <h2>Testing</h2>
                    <Link to="/Photos">Back To Photos</Link>
                </Col>

            </Row>
        </Container>
    )
}

export default PhotoPage;