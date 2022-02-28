import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;