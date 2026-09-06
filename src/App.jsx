import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductGroomer } from './pages/ProductGroomer';
import { ProductBrokerHub } from './pages/ProductBrokerHub';
import { ProductFoodshare } from './pages/ProductFoodshare';
import { ProductRemix } from './pages/ProductRemix';
import { Careers } from './pages/Careers';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Subtle background gradient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Navbar />
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/groomer" element={<ProductGroomer />} />
          <Route path="/products/broker-hub" element={<ProductBrokerHub />} />
          <Route path="/products/foodshare" element={<ProductFoodshare />} />
          <Route path="/products/remix" element={<ProductRemix />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
