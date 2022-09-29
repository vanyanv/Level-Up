import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//comps
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
