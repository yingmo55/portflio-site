import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/Landing/Landing';
import ContactPage from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact' element={<ContactPage />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;