import React from 'react';

import Navi from './Components/NavbarComponent/Navbar';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Photos from './Components/PhotosComponent/Photos';
import Contact from './Components/ContactComponent/Contact';


const App = () => {
    return (
        <>
            <Navi />
            <Home />
            <About />
            <Photos />
            <Contact />
        </>
    )
}

export default App;