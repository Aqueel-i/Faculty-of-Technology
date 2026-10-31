import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => <footer className="site-footer">
  <div className="footer-main">
    <div className="footer-brand">
      <span className="eyebrow light">Zahira College · Colombo</span>
      <h2>Curious minds.<br /><em>Useful ideas.</em></h2>
      <p>Advanced Level Technology Stream</p>
    </div>
    <div className="footer-column"><h3>Explore</h3><Link to="/about">About the stream</Link><Link to="/staff">Our people</Link><Link to="/projects">Student work</Link><Link to="/gallery">Gallery</Link></div>
    <div className="footer-column"><h3>Visit & connect</h3><p><MapPin size={16} /> Maradana Road, Colombo 10, Sri Lanka</p><a href="mailto:technology@zahiracollege.lk"><Mail size={16} /> technology@zahiracollege.lk</a><Link className="footer-contact" to="/contact">Send us a message <ArrowUpRight size={15} /></Link></div>
  </div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Zahira College · Technology Stream</span><span>Learning by making, thinking and doing.</span></div>
</footer>;

export default Footer;
