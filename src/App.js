import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/Landing/Landing';
import ContactPage from './Pages/Contact/Contact';

function App() {
  return (
    <>
    <p>test</p>
    
    <Navbar />
    <LandingPage />
    <Footer />
    </>
  );
}

export default App;