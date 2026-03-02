import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Products from './components/sections/Products';
import SavingsCalculator from './components/sections/SavingsCalculator';
import Services from './components/sections/Services';
import ProductionProcess from './components/sections/ProductionProcess';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Patronage from './components/sections/Patronage';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 transition-colors" dir="rtl">
      <Header />
      <main>
        <Hero />
        <SavingsCalculator />
        <Products />
        <Services />
        <ProductionProcess />
        <Gallery />
        <AboutUs />
        <Contact />
        <Patronage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
