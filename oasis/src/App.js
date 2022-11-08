import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
// import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Legal from './components/Legal/Legal';
import Questions from './components/Questions/Questions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {IntlProvider, FormattedMessage} from 'react-intl'
import EnlgishMessage from './lang/en-US.json'
library.add(fab, faCheckSquare, faCoffee, fas)


function App() {
  return (
    <IntlProvider locale='en-US' messages={EnlgishMessage}>
  <div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/aboutUs' element={<AboutUs />} />
      <Route path='/home/questions' element={<Questions />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/legal' element={<Legal />} />
      <Route path='/home/:id' element={<Detail />} />
    </Routes>
  </div>
  </IntlProvider>
  );
};

export default App;
