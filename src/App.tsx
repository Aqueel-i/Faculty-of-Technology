import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Announcements from './pages/Announcements';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
export function App() {
  return <Router><AppContent /></Router>;
}

function AppContent() {
  const location = useLocation();
  return <>
    <div className="site-shell">
      <Navbar />
      <main className="route-main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} className="route-stage" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .32, ease: 'easeOut' }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  </>;
}
