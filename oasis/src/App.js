import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee, fas)


function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/:id' element={<Detail />} />
    </Routes>
  </div>
  );
};

export default App;
