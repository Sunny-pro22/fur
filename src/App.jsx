import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import Heritage from './pages/Heritage.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <SmoothScroll>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}