import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
//import Gallery from './components/Gallery';
import BridgeSection from './components/Connector';
import TestimonialsSection from './components/ExperienceSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <TestimonialsSection />
      <BridgeSection />
      <Footer />
    </div>
  );
}

export default App;
