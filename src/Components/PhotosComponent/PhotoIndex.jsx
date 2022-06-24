import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
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
                            <Link to={`/Chura-Photography/Photos/${obj.name}`} tabIndex={-1}>
                                <Figure>
                                    <Figure.Image
                                        alt={obj.alt}
                                        src={obj.image}
                                        className="photos"
                                        width={0}
                                        height={0}
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