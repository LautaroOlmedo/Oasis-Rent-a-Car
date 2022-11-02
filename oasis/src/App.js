import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Legal from './components/Legal/Legal';
import Questions from './components/Questions/Questions';

function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/aboutUs' element={<AboutUs />} />
      <Route path='/home/questions' element={<Questions />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/legal' element={<Legal />} />
      <Route path='/home/:id' element={<Home />} />
    </Routes>
  </div>
  );
};

export default App;
