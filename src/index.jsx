import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './style/normalize.css';
import './style/main.scss';
import { Header } from './components/Header';
import { ErrorComp } from './components/ErrorComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/'
            element={<App />}
        />
        <Route exact path='*'
            element={<ErrorComp />}
        />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
