import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon, CheckCircleIcon } from 'lucide-react';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <div className="min-h-screen bg-white dark:bg-navy-950 pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
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
          <motion.div className="text-center max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Have questions about our department? Reach out to us and we'll be
              happy to help.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div className="lg:w-1/3" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <h2 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Feel free to reach out to us using any of the contact methods
                below. We're here to answer any questions you might have about
                our department.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 dark:text-white mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Advanced Level Technology Department,
                      <br />
                      Zahira College,
                      <br />
                      Maradana Road,
                      <br />
                      Colombo 10,
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      +94 11 2695256
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      +94 11 2695257
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      technology@zahiracollege.lk
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      info@zahiracollege.lk
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-medium text-navy-900 dark:text-white mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'youtube'].map((social, index) => <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors">
                        <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} alt={social} className="w-5 h-5 text-navy-900 dark:text-white" />
                      </a>)}
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div className="lg:w-2/3" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-navy-900 dark:text-white">
                  Send Us a Message
                </h2>
                {isSubmitted ? <motion.div className="text-center py-12" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.5
              }}>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors">
                      Send Another Message
                    </button>
                  </motion.div> : <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.1
                  }}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-700 text-gray-900 dark:text-white" placeholder="John Doe" />
                      </motion.div>
                      <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.2
                  }}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-700 text-gray-900 dark:text-white" placeholder="john@example.com" />
                      </motion.div>
                    </div>
                    <motion.div className="mb-6" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.3
                }}>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-700 text-gray-900 dark:text-white">
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admission Information">
                          Admission Information
                        </option>
                        <option value="Curriculum Questions">
                          Curriculum Questions
                        </option>
                        <option value="Project Collaboration">
                          Project Collaboration
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>
                    <motion.div className="mb-6" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.4
                }}>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-700 text-gray-900 dark:text-white" placeholder="Your message here..."></textarea>
                    </motion.div>
                    <motion.button type="submit" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all flex items-center justify-center w-full md:w-auto" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.5
                }} whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} disabled={isLoading}>
                      {isLoading ? <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div> : <>
                          <SendIcon className="w-5 h-5 mr-2" />
                          Send Message
                        </>}
                    </motion.button>
                  </form>}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
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
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
              Our Location
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Find us at Zahira College, Maradana Road, Colombo 10, Sri Lanka
            </p>
          </motion.div>
          <motion.div className="rounded-xl overflow-hidden shadow-lg" initial={{
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985569401146!2d79.86611641531882!3d6.912748095003863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596309dfac57%3A0x25d1d8c04f0959e2!2sZahira%20College%20Colombo!5e0!3m2!1sen!2slk!4v1621234567890!5m2!1sen!2slk" width="100%" height="450" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="Zahira College Map"></iframe>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
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
            <span className="text-teal-600 dark:text-teal-400 font-medium mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              Find answers to common questions about our department.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {[{
            question: 'What subjects are taught in the A/L Technology stream?',
            answer: 'The A/L Technology stream at Zahira College includes subjects such as Science for Technology, Engineering Technology, Information Communication Technology, and other complementary subjects as per the national curriculum.'
          }, {
            question: 'What are the admission requirements for the Technology Department?',
            answer: 'Students need to have successfully completed their O/Levels with good grades in Mathematics, Science, and English. An aptitude test and interview may also be conducted for selection.'
          }, {
            question: 'Are there any extracurricular activities related to technology?',
            answer: 'Yes, we have several technology clubs, coding competitions, robotics workshops, and annual technology exhibitions where students can showcase their projects.'
          }, {
            question: 'What career paths can students pursue after completing the A/L Technology stream?',
            answer: 'Graduates can pursue higher education in Engineering, Computer Science, Information Technology, Architecture, and many other technology-related fields, or enter the workforce in various technical roles.'
          }, {
            question: 'Does the department provide any special preparation for university entrance exams?',
            answer: 'Yes, we conduct special revision classes, mock exams, and provide additional resources to help students prepare for university entrance examinations.'
          }].map((faq, index) => <motion.div key={index} className="mb-6 bg-gray-50 dark:bg-navy-800 rounded-lg p-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <h3 className="text-lg font-bold mb-3 text-navy-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;