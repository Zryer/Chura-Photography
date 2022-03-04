import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Figure, Button } from 'react-bootstrap';
import { PHOTOSLIST } from './PhotosList';

const PhotoIndex = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Container className="photoIndexContainer" id="photoIndexContainer" fluid>
            <Row>
                {PHOTOSLIST.map(obj => {
                    return (
                        <Col key={obj.id} sm={12} md={6} lg={6} className={`${obj.animation}`}>
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
            <Col className="photoIndexDiv">
                {isVisible && <Button onClick={scrollToTop}>Scroll back to top</Button>}
            </Col>
        </Container>
    )
}

export default PhotoIndex;