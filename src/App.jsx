import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <About />
      <Footer />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;
