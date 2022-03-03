import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/Landing/Landing';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;