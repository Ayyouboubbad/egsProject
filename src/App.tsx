import React, { Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { useTranslation } from 'react-i18next';

// Lazy-loaded components (Code Splitting)
const AboutUs = React.lazy(() => import('./components/sections/AboutUs'));
const Timeline = React.lazy(() => import('./components/sections/Timeline'));
const Products = React.lazy(() => import('./components/sections/Products'));
const SavingsCalculator = React.lazy(() => import('./components/sections/SavingsCalculator'));
const Services = React.lazy(() => import('./components/sections/Services'));
const ProductionProcess = React.lazy(() => import('./components/sections/ProductionProcess'));
const Gallery = React.lazy(() => import('./components/sections/Gallery'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const Patronage = React.lazy(() => import('./components/sections/Patronage'));

function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 transition-colors w-full overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="w-full overflow-x-hidden min-h-screen">
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-500/30 border-t-brand-500 rounded-full animate-spin"></div></div>}>
          <SavingsCalculator />
          <Products />
          <Services />
          <ProductionProcess />
          <Gallery />
          <AboutUs />
          <Timeline />
          <Contact />
          <Patronage />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
