import { useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cadastro from '../components/Cadastro';
import Home from './Home';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
