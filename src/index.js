import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Style/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home';
import Erreur from './Pages/Erreur'
import Logement from './Pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Logement/:id' element={<Logement />}/>
        <Route path="/error" element={<Erreur />}/>
        <Route path="*" element={<Erreur />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);