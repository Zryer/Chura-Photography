import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, browserHistory } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Components/NavbarComponent/Navbar.css';
import './Components/HomeComponent/Home.css';
import './Components/AboutComponent/About.css';
import './Components/PhotosComponent/Photos.css';
import './Components/ContactComponent/Contact.css';
import './Components/WelcomeComponent/Welcome.css';

ReactDOM.render(
    <HashRouter history={browserHistory}><ScrollToTop /><App /></HashRouter>,document.getElementById('root')
);
