import './App.css';
import React from 'react';
import Header from './components/UI/Header';
import AboutUs from './components/pages/AboutUs';
import FAQ from './components/pages/FAQ';
import Calculate from './components/pages/Calculate';
import Home from './components/pages/Home';
import Reserve from './components/pages/Reserve';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/calculate' element={<Calculate />}></Route>
        <Route path='/reserve' element={<Reserve />}></Route>
      </Routes>
    </div>
  );
}

export default App;
