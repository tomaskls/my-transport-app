import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Airports from './components/Airports';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <div className="font-sans bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Airports />
      <Contact />
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;