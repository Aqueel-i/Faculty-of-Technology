import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'About', to: '/about' },
  { label: 'People', to: '/staff' },
  { label: 'Student work', to: '/projects' },
  { label: 'Stories', to: '/announcements' },
  { label: 'Gallery', to: '/gallery' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location]);

  return <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="brand" aria-label="Zahira College Technology Stream home">
        <span className="brand-mark"><img src="/Assets/ZC.png" alt="" /></span>
        <span className="brand-copy"><strong>Zahira College</strong><small>Technology Stream · Colombo</small></span>
      </Link>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(link => <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.label}</NavLink>)}
        <Link to="/contact" className="nav-contact">Get in touch <ArrowUpRight size={15} /></Link>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
};

export default Navbar;
