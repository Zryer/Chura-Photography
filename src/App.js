import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navi from './Components/NavbarComponent/Navbar';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Photos from './Components/PhotosComponent/Photos';
import Contact from './Components/ContactComponent/Contact';
import PhotoIndex from './Components/PhotosComponent/PhotoIndex';
import PhotoPage from './Components/PhotosComponent/PhotoPage';


const App = () => {
    return (
        <>
            <Navi />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Photos" element={<Photos />}>
                    <Route path="" element={<PhotoIndex />} />
                    <Route path=":param" element={<PhotoPage />} />
                </Route>
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default App;