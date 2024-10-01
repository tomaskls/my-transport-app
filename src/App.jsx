import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Airports from './components/Airports';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Airports />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;