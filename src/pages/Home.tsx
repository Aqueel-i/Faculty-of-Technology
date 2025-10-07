import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BellIcon, UsersIcon, ImageIcon, ChevronDownIcon } from 'lucide-react';
const Home: React.FC = () => {
  return <div className="min-h-screen bg-white dark:bg-navy-950">
    {/* Hero Section */}
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950 z-0"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl" animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" animate={{
          x: [0, -50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
            <motion.span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-4" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.2
            }}>
              Welcome to Zahira College
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3
            }}>
              Advanced Level{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Technology
              </span>{' '}
              Department
            </motion.h1>
            <motion.p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.4
            }}>
              Empowering students with cutting-edge technology education and
              fostering innovation in a dynamic learning environment.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.5
            }}>
              <Link to="/about" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all flex items-center justify-center group">
                Explore Department
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/20 backdrop-blur-sm">
                View Projects
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="lg:w-1/2" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8
          }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur-lg opacity-70"></div>
              <div className="relative bg-navy-800 p-1 rounded-2xl overflow-hidden">
                
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
          <span className="text-gray-200 text-xl mb-2">

          </span>
          <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }}>
            <ChevronDownIcon className="w-6 h-6 text-teal-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
    {/* Quick Links Section */}
    <section className="py-16 bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold text-center mb-12 text-navy-900 dark:text-white" initial={{
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
          Quick Access
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center group relative overflow-hidden" whileHover={{
            y: -5
          }} initial={{
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BellIcon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
              Announcements
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay updated with the latest news, events, and important
              announcements.
            </p>
            <Link to="/announcements" className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300">
              View Announcements
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center group relative overflow-hidden" whileHover={{
            y: -5
          }} initial={{
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <UsersIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
              Our Staff
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Meet our dedicated team of teachers and staff members.
            </p>
            <Link to="/staff" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
              Meet the Team
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center group relative overflow-hidden" whileHover={{
            y: -5
          }} initial={{
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">
              Gallery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore photos and videos from our labs, events, and student
              activities.
            </p>
            <Link to="/gallery" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300">
              Browse Gallery
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    {/* Featured Projects Section */}
    <section className="py-20 bg-white dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 className="text-3xl font-bold mb-4 text-navy-900 dark:text-white" initial={{
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
            Featured Student Projects
          </motion.h2>
          <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" initial={{
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
            Discover innovative projects created by our talented students,
            showcasing their technical skills and creative problem-solving
            abilities.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: 'Smart Irrigation System',
            description: 'An IoT-based system that monitors soil moisture and automates irrigation.',
            image: 'https://img.freepik.com/premium-photo/closeup-smart-irrigation-system-using-soil-moisture-sensors-optimize-water-usage_1314467-76913.jpg',
            delay: 0
          }, {
            title: 'Augmented Reality Learning App',
            description: 'An educational app that brings textbook content to life using AR technology.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            delay: 0.1
          }, {
            title: 'Automated Waste Sorter',
            description: 'A machine learning system that identifies and sorts different types of waste.',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            delay: 0.2
          }].map((project, index) => <motion.div key={index} className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: project.delay
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }}>
            <div className="relative overflow-hidden h-56">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <Link to="/projects" className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>)}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="px-8 py-3 bg-navy-900 dark:bg-teal-600 hover:bg-navy-800 dark:hover:bg-teal-700 text-white font-medium rounded-lg transition-colors inline-flex items-center">
            View All Projects
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="py-20 bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
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
          <h2 className="text-3xl font-bold mb-4 text-navy-900 dark:text-white">
            What Our Students Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our students about their experience in the Advanced
            Level Technology Department at Zahira College.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            quote: 'The technology department has provided me with hands-on experience that goes beyond textbooks. The teachers are supportive and always encourage us to innovate.',
            name: 'Ahmed Farook',
            role: 'A/L Student, 2023 Batch',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
            delay: 0
          }, {
            quote: "I've developed both technical skills and critical thinking abilities. The project-based learning approach has prepared me well for university and beyond.",
            name: 'Malik Jahan',
            role: 'A/L Student, 2022 Batch',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
            delay: 0.1
          }, {
            quote: "The technology labs and equipment available to us are excellent. I've been able to work on projects I never thought possible at the school level.",
            name: 'Fathima Nizar',
            role: 'A/L Student, 2023 Batch',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
            delay: 0.2
          }].map((testimonial, index) => <motion.div key={index} className="bg-white dark:bg-navy-800 rounded-xl p-8 shadow-lg" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: testimonial.delay
          }} viewport={{
            once: true
          }}>
            <div className="mb-6">
              <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-bold text-navy-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl" animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" animate={{
          x: [0, -50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="bg-gradient-to-br from-navy-800 to-navy-950 p-12 rounded-2xl shadow-2xl border border-navy-700/50 max-w-4xl mx-auto text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Explore Technology?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our Advanced Level Technology Department and unlock a world
            of innovation, creativity, and technical excellence at Zahira
            College.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all">
              Contact Us
            </Link>
            <Link to="/about" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/20">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>;
};
export default Home;