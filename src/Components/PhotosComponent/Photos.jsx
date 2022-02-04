import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Photos = () => {
    return (
        <Container className="photosContainer" fluid>
            <Outlet />
        </Container>
    )
}

export default Photos;