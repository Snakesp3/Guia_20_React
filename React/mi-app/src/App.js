import React from 'react';

import { BrowserRouter, Router, Routes } from 'react-router-dom';

import About from './pages/About';

import Home from './pages/Home';

import PageNotFound from './pages/PageNotFound';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <div className='app'>
        <Routes>
          <Router exact path='/' element={<Home />} />
          <Router exact path='about' element={<about />} />
          <Router exact path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
