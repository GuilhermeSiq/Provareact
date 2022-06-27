import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home';
import Cadastrar from './pages/Cadastrar/cadastrar'
import Consultar from './pages/Consultar/consultar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/cadastrar' element={<Cadastrar/>} />
      <Route path = '/consultar' element={<Consultar/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

