import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import ProjectShowcase from './Components/ProjectShowcase/ProjectShowcase';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectShowcase />
    </div>
  );
}

export default App;
