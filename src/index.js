import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Components/NavbarComponent/Navbar.css';
import './Components/HomeComponent/Home.css';
import './Components/AboutComponent/About.css';
import './Components/PhotosComponent/Photos.css';
import './Components/ContactComponent/Contact.css';


const container = document.getElementById('root')

const root = createRoot(container);
root.render(
<BrowserRouter><ScrollToTop /><App /></BrowserRouter>
);