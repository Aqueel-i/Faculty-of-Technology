import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, BeakerIcon, BookOpenIcon, AwardIcon, UsersIcon } from 'lucide-react';
const About: React.FC = () => {
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
              About Our Department
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Advanced Level Technology Stream
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Empowering the next generation of innovators and technologists
              through comprehensive education and hands-on experience.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div className="lg:w-1/2" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }}>
              <span className="text-teal-600 dark:text-teal-400 font-medium mb-2 block">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6 text-navy-900 dark:text-white">
                Leading Technology Education Since 2010
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The Advanced Level Technology Department at Zahira College,
                Colombo was established in 2010 with a vision to provide
                comprehensive technology education to prepare students for the
                rapidly evolving digital world. Over the years, we have
                continuously updated our curriculum and facilities to stay at
                the forefront of technological advancements.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our department offers specialized education in technology,
                focusing on both theoretical knowledge and practical
                applications. We believe in nurturing not just technical skills
                but also creativity, critical thinking, and problem-solving
                abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Modern Labs
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Experienced Staff
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Project-Based Learning
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl blur-lg"></div>
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Students working in technology lab" className="relative rounded-lg shadow-lg w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6">
                <BookOpenIcon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide high-quality technology education that empowers
                students with the knowledge, skills, and values needed to excel
                in the digital era. We aim to foster innovation, critical
                thinking, and ethical use of technology to prepare students for
                higher education and future careers.
              </p>
              <ul className="mt-6 space-y-2">
                {['Deliver comprehensive technology curriculum', 'Provide hands-on practical experience', 'Foster innovation and problem-solving skills', 'Prepare students for higher education and industry'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>)}
              </ul>
            </motion.div>
            <motion.div className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <AwardIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be recognized as a center of excellence in technology
                education, producing graduates who are not only technically
                proficient but also creative thinkers and responsible digital
                citizens. We envision our students leading technological
                advancements and contributing positively to society.
              </p>
              <ul className="mt-6 space-y-2">
                {['Become a leading technology education center', 'Produce technically skilled and ethically responsible graduates', 'Encourage research and innovation', 'Build strong industry and academic partnerships'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
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
              What We Offer
            </span>
            <h2 className="text-3xl font-bold mb-4 text-navy-900 dark:text-white">
              Key Features of Our Department
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our department offers a comprehensive technology education
              experience with state-of-the-art facilities and innovative
              teaching methods.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <div className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
            title: 'Modern Computer Labs',
            description: 'Fully equipped computer laboratories with the latest hardware and software for hands-on learning and project development.',
            delay: 0
          }, {
            icon: <BeakerIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: 'Electronics Workshop',
            description: 'Specialized workshop for electronics projects, circuit design, and hardware prototyping with professional equipment.',
            delay: 0.1
          }, {
            icon: <UsersIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
            title: 'Qualified Faculty',
            description: 'Experienced teachers and industry professionals dedicated to providing quality education and mentorship.',
            delay: 0.2
          }, {
            icon: <BookOpenIcon className="w-8 h-8 text-green-600 dark:text-green-400" />,
            title: 'Comprehensive Curriculum',
            description: 'A well-structured curriculum covering programming, hardware, networking, and emerging technologies.',
            delay: 0.3
          }, {
            icon: <AwardIcon className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
            title: 'Competition Opportunities',
            description: 'Regular participation in national and international technology competitions to showcase student talents.',
            delay: 0.4
          }, {
            icon: <div className="w-8 h-8 text-red-600 dark:text-red-400" />,
            title: 'Innovation Hub',
            description: 'Dedicated space for students to work on innovative projects and collaborate on technology solutions.',
            delay: 0.5
          }].map((feature, index) => <motion.div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: feature.delay
          }} viewport={{
            once: true
          }}>
                <div className="w-14 h-14 bg-gray-100 dark:bg-navy-700 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl" animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
          <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" animate={{
          x: [0, -50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}></motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
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
              Our Journey
            </span>
            <h2 className="text-3xl font-bold mb-4 text-navy-900 dark:text-white">
              Department History
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Tracing our growth and achievements through the years.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-navy-700"></div>
            {/* Timeline items */}
            {[{
            year: '2010',
            title: 'Department Established',
            description: 'The Advanced Level Technology Department was officially established at Zahira College, Colombo.',
            isLeft: true,
            delay: 0
          }, {
            year: '2012',
            title: 'First Computer Lab',
            description: 'Inauguration of our first fully-equipped computer laboratory with 30 workstations.',
            isLeft: false,
            delay: 0.1
          }, {
            year: '2015',
            title: 'Curriculum Expansion',
            description: 'Expanded curriculum to include advanced programming, electronics, and digital design courses.',
            isLeft: true,
            delay: 0.2
          }, {
            year: '2018',
            title: 'National Recognition',
            description: 'Received national recognition for outstanding results in A/L Technology stream examinations.',
            isLeft: false,
            delay: 0.3
          }, {
            year: '2020',
            title: 'Innovation Hub Launch',
            description: 'Launched a dedicated Innovation Hub for student projects and research activities.',
            isLeft: true,
            delay: 0.4
          }, {
            year: '2023',
            title: 'Digital Transformation',
            description: 'Complete digital transformation of teaching methods and introduction of hybrid learning platforms.',
            isLeft: false,
            delay: 0.5
          }].map((item, index) => <motion.div key={index} className={`relative mb-12 ${item.isLeft ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'} md:w-1/2 px-4`} initial={{
            opacity: 0,
            x: item.isLeft ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: item.delay
          }} viewport={{
            once: true
          }}>
                <div className={`absolute top-5 ${item.isLeft ? 'md:-right-6' : 'md:-left-6'} hidden md:block w-12 h-12 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center z-10`}>
                  {item.year}
                </div>
                <div className="md:hidden mb-2 inline-block px-4 py-1 bg-teal-500 text-white rounded-full text-sm font-bold">
                  {item.year}
                </div>
                <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;