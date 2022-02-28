import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import ProjectShowcase from './Components/ProjectShowcase/ProjectShowcase';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
