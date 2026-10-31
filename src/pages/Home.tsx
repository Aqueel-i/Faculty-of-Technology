import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Cpu, FlaskConical, Ruler, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { academicStaff, subjectOrder } from '../data/academicStaff';

const Home: React.FC = () => <div>
  <section className="home-hero">
    <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
    <div className="hero-inner">
      <div className="hero-copy">
        <motion.span className="eyebrow light" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}><i /> A/L Technology · Zahira College</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: [.22, 1, .36, 1] }}>Big questions.<br /><em>Built by hand.</em></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>Where science meets design, and students turn what they learn into things that make a difference.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .38 }}><Link to="/about" className="button button-light">Discover the stream <ArrowUpRight size={17} /></Link><Link to="/projects" className="text-link light-link">See student work <ArrowRight size={16} /></Link></motion.div>
        <motion.div className="hero-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}><span className="note-line" /> Learning through practice, at Zahira since 1892</motion.div>
      </div>
      <motion.div className="hero-photo-wrap" initial={{ opacity: 0, scale: .96, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .18, ease: [.22, 1, .36, 1] }}><div className="photo-frame"><img src="/Assets/Group.jpeg" alt="Technology Stream students and teachers at Zahira College" /></div><div className="photo-caption"><span>One community</span><span>Many ways to make</span></div><motion.div className="photo-stamp" animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><img src="/Assets/Tech.png" alt="Technology Stream emblem" /></motion.div></motion.div>
    </div>
    <motion.a className="scroll-cue" href="#welcome" aria-label="Scroll to discover" animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}><ArrowDown size={18} /></motion.a>
  </section>

  <section className="welcome-section section-pad" id="welcome"><Reveal><div className="content-grid">
    <div><span className="eyebrow">A different way to learn</span><h2 className="display-heading">Think clearly.<br /><em>Make boldly.</em></h2></div>
    <div className="welcome-copy"><p className="lead">Technology is more than a subject. It’s a way to understand the world, ask better questions and shape practical answers.</p><p>At Zahira College, students build a strong foundation in science, engineering and information technology, then put those ideas to work through projects, collaboration and hands-on learning.</p><Link to="/about" className="text-link">Meet the Technology Stream <ArrowRight size={16} /></Link></div>
  </div></Reveal></section>

  <section className="home-staff-section section-pad"><Reveal><div className="staff-section-heading"><div><span className="eyebrow">Academic staff · in subject order</span><h2 className="display-heading">Meet the people<br />behind the <em>learning.</em></h2></div><Link to="/staff" className="text-link">View academic staff <ArrowRight size={16} /></Link></div></Reveal><div className="home-staff-grid">{subjectOrder.map((item,index)=><Reveal key={item.code} delay={index*.09}><motion.div className="home-staff-card" whileHover={{ y:-6 }}><span>{String(index+1).padStart(2,'0')}</span><strong>{item.code}</strong><h3>{item.name}</h3><ul>{academicStaff.filter(member=>member.subjectCode===item.code).map(member=><li key={member.name}>{member.name}</li>)}</ul></motion.div></Reveal>)}</div></section>

  <section className="learning-section section-pad"><Reveal><div className="section-heading"><div><span className="eyebrow light">The learning experience</span><h2 className="display-heading light-heading">Knowledge in <em>motion.</em></h2></div><p>From first principles to the finished prototype, students learn to connect ideas with the real world.</p></div></Reveal>
    <div className="learning-grid">{[{icon:<FlaskConical/>,title:'Explore the science',text:'Investigate how systems work through scientific thinking, observation and experimentation.'},{icon:<Ruler/>,title:'Design & engineer',text:'Turn needs into thoughtful designs, then test, refine and build workable solutions.'},{icon:<Cpu/>,title:'Create with technology',text:'Use digital tools and technical knowledge to make ideas tangible and useful.'}].map((item,index)=><Reveal key={item.title} delay={index*.1}><motion.article className="learning-card" whileHover={{ y:-6 }}><span className="card-index">0{index+1}</span><div className="learning-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></motion.article></Reveal>)}</div>
  </section>

  <section className="feature-section section-pad"><Reveal><motion.div className="feature-image" initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}><img src="/Assets/Group.jpeg" alt="The Zahira College Technology Stream community" /></motion.div></Reveal><Reveal delay={.12}><div className="feature-copy"><span className="eyebrow">Our community</span><h2 className="display-heading">Better work<br />happens <em>together.</em></h2><p>Students, teachers and mentors bring different strengths to every challenge. The result is a learning community built on curiosity, respect and a shared pride in making.</p><Link to="/staff" className="button button-dark">Meet our people <ArrowUpRight size={17} /></Link></div></Reveal></section>

  <motion.section className="cta-band" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}><div><motion.div animate={{ rotate: [0, 12, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}><Sparkles size={20} /></motion.div><span className="eyebrow light">Your next chapter starts here</span><h2>Ready to explore<br /><em>what’s possible?</em></h2></div><Link to="/contact" className="button button-light">Get in touch <ArrowUpRight size={17} /></Link></motion.section>
</div>;

export default Home;
