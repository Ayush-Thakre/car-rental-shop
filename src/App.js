import './App.css'
// import ScrollReveal from 'scrollreveal';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Services from './component/services';
import Reviews from './component/reviews';
import Purchase from './component/purchase';
import Approach from './component/approach';
import About from './component/about';
import Footer from './component/footer';
import Header from './component/header';
import Rent from './component/rent';


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/About" element={<About />} />
          <Route path="/purchase" element={<Purchase />} />
  <Route path="/rent/:id" element={<Rent/>} />

          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />

        </Routes>
     
  
        <Footer />
     
    </div>
  </Router>
  );
}

export default App;
