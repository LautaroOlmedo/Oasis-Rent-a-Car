import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Route, Router, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { LangProvider } from './context/lanContext';
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </LangProvider>
);