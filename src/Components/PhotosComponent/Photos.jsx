import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Navi from '../NavbarComponent/Navbar';

const Photos = () => {
    return (
        <>
        <Navi/>
        <Container className="photosContainer" id="photoContainer" fluid>
            <Outlet />
        </Container>
        </>
    )
}

export default Photos;