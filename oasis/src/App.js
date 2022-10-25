import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
//import Home from './components/LandingPage/Home';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      {/* <Route path='/home' element={<Home />}></Route> */}
    </Routes>
  </div>
   
  );
};

export default App;
