import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import SavingsCalculator from './components/sections/SavingsCalculator';
import Services from './components/sections/Services';
import ProductionProcess from './components/sections/ProductionProcess';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50" dir="rtl">
      <Header />
      <main>
        <Hero />
        <SavingsCalculator />
        <Products />
        <Services />
        <ProductionProcess />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
