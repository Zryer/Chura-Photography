import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Photos from './Components/PhotosComponent/Photos';
import Contact from './Components/ContactComponent/Contact';
import PhotoIndex from './Components/PhotosComponent/PhotoIndex';
import PhotoPage from './Components/PhotosComponent/PhotoPage';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';


const App = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {loading === false ? (
                <Routes>
                    <Route path="/Chura-Photography" element={<Home />} />
                    <Route path="/Chura-Photography/About" element={<About />} />
                    <Route path="/Chura-Photography/Photos" element={<Photos />}>
                        <Route path="" element={<PhotoIndex />} />
                        <Route path=":param" element={<PhotoPage />} />
                    </Route>
                    <Route path="/Chura-Photography/Contact" element={<Contact />} />
                </Routes>
            ) : (
                <LoadingScreen/>
            )}
        </>
    )
}

export default App;