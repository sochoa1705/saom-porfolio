import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Knowledge/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
