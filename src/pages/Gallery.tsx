import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Camera, X } from 'lucide-react';
import Reveal from '../components/Reveal';
import { academicStaff } from '../data/academicStaff';

const categories = ['All', 'Community', 'College', 'Technology', 'Academic staff'];
const galleryItems = [
  { id: 1, category: 'Community', title: 'Our learning community', detail: 'Students and staff of the Technology Stream', image: '/Assets/Group.jpeg', alt: 'Zahira College Technology Stream students and staff gathered together', type: 'photo' },
  { id: 2, category: 'College', title: 'Zahira College', detail: 'The college we call home', image: '/Assets/ZC.png', alt: 'Zahira College crest', type: 'crest' },
  { id: 3, category: 'Technology', title: 'Technology Stream', detail: 'A community built around practical learning', image: '/Assets/Tech.png', alt: 'Technology Stream emblem', type: 'crest' },
  ...academicStaff.map((member, index) => ({ id: index + 4, category: 'Academic staff', title: member.name, detail: `${member.subject} · ${member.role}`, image: member.image, alt: `Portrait of ${member.name}`, type: 'portrait' })),
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleItems = activeCategory === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return <div className="inner-page">
    <section className="page-hero"><div className="page-hero-inner"><motion.span className="eyebrow light" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}><i /> The gallery</motion.span><motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12 }}>A few frames<br />from <em>our story.</em></motion.h1><motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .23 }}>Browse our college, technology stream and learning community.</motion.p></div></section>
    <section className="section-pad gallery-section">
      <Reveal><div className="gallery-lead"><div><span className="eyebrow">Life at Zahira</span><h2 className="display-heading">Every day is<br /><em>part of the story.</em></h2></div><p>Explore a growing collection of images from the college and Technology Stream. Choose a category to browse.</p></div></Reveal>
      <div className="gallery-toolbar" role="group" aria-label="Filter gallery by category">{categories.map((category, index) => <motion.button key={category} className={`gallery-filter ${activeCategory === category ? 'selected' : ''}`} onClick={() => setActiveCategory(category)} whileTap={{ scale: .96 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }}>{category}<span>{category === 'All' ? galleryItems.length : galleryItems.filter(item => item.category === category).length}</span></motion.button>)}</div>
      <motion.div layout className="categorized-gallery">
        <AnimatePresence mode="popLayout">{visibleItems.map((item, index) => <motion.button layout key={item.id} className={`categorized-gallery-card ${item.type === 'crest' ? 'crest-card' : item.type === 'portrait' ? 'staff-gallery-card' : 'community-card'}`} onClick={() => setSelected(item)} initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .38, delay: Math.min(index * .035, .35), layout: { duration: .3 } }} whileHover={{ y: -5 }}><span className="gallery-card-image"><img src={item.image} alt={item.alt} /></span><span className="gallery-card-meta"><span className="eyebrow">{item.category}</span><strong>{item.title}</strong><small>{item.detail}</small></span><ArrowUpRight className="gallery-card-arrow" /></motion.button>)}</AnimatePresence>
      </motion.div>
      <p className="gallery-caption"><Camera size={15} /> More photos can be added as the department shares them.</p>
    </section>
    <section className="project-note"><span className="eyebrow light">Be part of it</span><h2>Have a photo to share?<br /><em>We’d love to see it.</em></h2><Link to="/contact" className="button button-light">Get in touch <ArrowUpRight size={17} /></Link></section>
    <AnimatePresence>{selected && <motion.div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.button className="lightbox-close" aria-label="Close image" onClick={() => setSelected(null)} whileTap={{ scale: .9 }}><X /></motion.button><motion.div className={`lightbox-image ${selected.type === 'crest' ? 'crest' : ''}`} layoutId={`gallery-${selected.id}`} onClick={event => event.stopPropagation()}><img src={selected.image} alt={selected.alt} /><div><span className="eyebrow light">{selected.category}</span><h2>{selected.title}</h2><p>{selected.detail}</p></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
};
export default Gallery;
