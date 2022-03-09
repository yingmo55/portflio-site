import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;