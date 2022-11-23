import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { LangProvider } from './context/lanContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LangProvider>
);