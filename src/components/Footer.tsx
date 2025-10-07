import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4 text-teal-400">
              A/L Technology Department
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering students with cutting-edge technology education and
              fostering innovation at Zahira College, Colombo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4 text-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-300 hover:text-white transition-colors">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/announcements" className="text-gray-300 hover:text-white transition-colors">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Zahira College, Maradana Road, Colombo 10, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">+94 11 2695256</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">
                  technology@zahiracollege.lk
                </span>
              </li>
            </ul>
          </motion.div>
          {/* Newsletter */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 bg-navy-800 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white" />
              <button type="submit" className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md transition-colors text-white font-medium">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Advanced Level Technology Department - Zahira
              College. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-teal-400 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;