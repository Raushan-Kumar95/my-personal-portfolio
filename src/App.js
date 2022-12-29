import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
