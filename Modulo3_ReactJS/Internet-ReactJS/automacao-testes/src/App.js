import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aula4 from './aula-4/Aula4';
import './App.css';
import Pagina404 from './NotFound';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aula-4" element={<Aula4 />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
