import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import DidYouKnow from './components/sections/DidYouKnow';
import Recipes from './components/sections/Recipes';
import FarmTour from './components/sections/FarmTour';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <DidYouKnow />
        <Recipes />
        <FarmTour />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
