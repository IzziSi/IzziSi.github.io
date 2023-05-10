import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import JavascriptPortfolio from './components/jsportfolio/JavascriptPortfolio';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rachel from './components/jsportfolio/rachel/Rachel';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/javascript' element={<JavascriptPortfolio />} />
        <Route path='/javascript/rachel' element={<Rachel />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
