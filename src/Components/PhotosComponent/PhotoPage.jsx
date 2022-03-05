import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

    const { name, image, alt, width, text } = photo;

    return (
        <Container className="photoPageContainer" id="photoPage" fluid>
            <Row className="photoPageRow">
                <Col>
                    <img className={width} src={image} alt={alt} />
                    <h2>{text}</h2>
                    <Link to="/Photos" className="photoBack">Back to Photos</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoPage;