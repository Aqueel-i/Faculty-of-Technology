import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, TagIcon, UsersIcon, CalendarIcon, AwardIcon, GithubIcon, ExternalLinkIcon, SearchIcon, FilterIcon } from 'lucide-react';
interface ProjectMember {
  name: string;
  role: string;
  image?: string;
}
interface ProjectLink {
  type: 'github' | 'website' | 'video' | 'document';
  url: string;
  label: string;
}
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  year: number;
  members: ProjectMember[];
  links?: ProjectLink[];
  featured: boolean;
  awards?: string[];
}
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeTech, setActiveTech] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const projects: Project[] = [{
    id: 1,
    title: 'Smart Irrigation System',
    description: 'An IoT-based system that monitors soil moisture and automates irrigation to optimize water usage in agricultural settings.',
    longDescription: 'This project addresses water conservation challenges in agriculture by implementing a smart irrigation system. The system uses soil moisture sensors, weather data integration, and machine learning algorithms to determine optimal watering schedules. Features include real-time monitoring through a mobile app, automated valve control, water usage statistics, and alert notifications for system issues. The project demonstrates significant water savings while maintaining or improving crop yields in test environments.',
    image: 'https://images.unsplash.com/photo-1621274147744-cfb5454644b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'iot',
    technologies: ['Arduino', 'ESP32', 'IoT', 'Mobile App', 'Machine Learning'],
    year: 2023,
    members: [{
      name: 'Ahmed Khan',
      role: 'Team Lead & Hardware Design'
    }, {
      name: 'Fathima Noor',
      role: 'Software Development'
    }, {
      name: 'Raheem Ismail',
      role: 'Data Analysis & ML Implementation'
    }],
    links: [{
      type: 'github',
      url: 'https://github.com/example/smart-irrigation',
      label: 'Source Code'
    }, {
      type: 'website',
      url: 'https://example.com/smart-irrigation',
      label: 'Project Website'
    }],
    featured: true,
    awards: ['National Innovation Award 2023', 'Best Sustainable Technology Project']
  }, {
    id: 2,
    title: 'Augmented Reality Learning App',
    description: 'An educational app that brings textbook content to life using AR technology, enhancing the learning experience for students.',
    longDescription: 'The Augmented Reality Learning App transforms traditional educational materials into interactive 3D experiences. By scanning textbook pages with a smartphone or tablet, students can view 3D models, animations, and supplementary information that enhances understanding of complex concepts. The application focuses on science subjects, particularly biology, physics, and chemistry, where visualization of abstract concepts is crucial. User testing in local schools showed improved engagement and better retention of information compared to traditional learning methods.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'mobile',
    technologies: ['Unity', 'ARCore', 'Android', '3D Modeling', 'React Native'],
    year: 2023,
    members: [{
      name: 'Zahra Hussain',
      role: 'Project Manager & AR Developer'
    }, {
      name: 'Imran Malik',
      role: '3D Modeling & Content Creation'
    }, {
      name: 'Sameer Abbas',
      role: 'Mobile App Developer'
    }],
    links: [{
      type: 'video',
      url: 'https://youtube.com/example',
      label: 'Demo Video'
    }, {
      type: 'website',
      url: 'https://example.com/ar-learning',
      label: 'Download App'
    }],
    featured: true
  }, {
    id: 3,
    title: 'Automated Waste Sorter',
    description: 'A machine learning system that identifies and sorts different types of waste, promoting recycling and proper waste management.',
    longDescription: 'The Automated Waste Sorter project addresses the global challenge of waste management by creating an intelligent system that can identify and sort different types of waste materials. Using computer vision and machine learning algorithms, the system can distinguish between plastic, paper, metal, glass, and organic waste with over 90% accuracy. The physical prototype includes a conveyor belt, multiple sorting bins, and a camera system for waste identification. The project aims to improve recycling efficiency and reduce contamination in recycling streams.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'ai',
    technologies: ['TensorFlow', 'Computer Vision', 'Raspberry Pi', 'Python', 'Robotics'],
    year: 2022,
    members: [{
      name: 'Ayesha Farook',
      role: 'AI Developer'
    }, {
      name: 'Yusuf Hameed',
      role: 'Hardware Engineer'
    }, {
      name: 'Malik Jahan',
      role: 'Software Engineer'
    }],
    links: [{
      type: 'github',
      url: 'https://github.com/example/waste-sorter',
      label: 'ML Model Repository'
    }, {
      type: 'document',
      url: 'https://example.com/paper.pdf',
      label: 'Research Paper'
    }],
    featured: true,
    awards: ['Environmental Innovation Award 2022']
  }, {
    id: 4,
    title: 'Health Monitoring Wearable',
    description: 'A wearable device that tracks vital health metrics and provides real-time feedback and alerts for users and their healthcare providers.',
    longDescription: 'This health monitoring wearable device is designed to track vital health parameters including heart rate, blood oxygen levels, temperature, and activity. The compact wrist-worn device transmits data to a smartphone application that provides real-time monitoring, historical data analysis, and health insights. The system includes emergency alert features that can notify designated contacts or healthcare providers when abnormal readings are detected. The project included extensive testing for accuracy against medical-grade equipment and user experience optimization.',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'iot',
    technologies: ['Arduino', 'Bluetooth', 'Mobile App', 'Sensors', 'Healthcare'],
    year: 2022,
    members: [{
      name: 'Fathima Nizar',
      role: 'Hardware Design'
    }, {
      name: 'Ahmed Farook',
      role: 'Software Development'
    }, {
      name: 'Zahra Malik',
      role: 'UI/UX Design'
    }],
    links: [{
      type: 'website',
      url: 'https://example.com/health-wearable',
      label: 'Project Details'
    }],
    featured: false
  }, {
    id: 5,
    title: 'Virtual Campus Tour',
    description: 'A virtual reality application that provides an immersive tour of the college campus for prospective students and visitors.',
    longDescription: 'The Virtual Campus Tour project creates an immersive 3D experience of Zahira College for prospective students, parents, and visitors. The application allows users to explore buildings, facilities, and outdoor spaces through an interactive virtual environment. Key features include information points about departments and facilities, historical facts about the college, guided tour options, and the ability to view the campus in different seasons and times of day. The project combined 3D modeling, panoramic photography, and interactive design to create a realistic and engaging experience.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'vr',
    technologies: ['Unity', 'VR', '3D Modeling', 'C#', 'WebGL'],
    year: 2023,
    members: [{
      name: 'Imran Malik',
      role: 'VR Developer'
    }, {
      name: 'Sameer Abbas',
      role: '3D Artist'
    }, {
      name: 'Ayesha Farook',
      role: 'Content Designer'
    }],
    links: [{
      type: 'website',
      url: 'https://example.com/virtual-tour',
      label: 'Experience the Tour'
    }, {
      type: 'video',
      url: 'https://youtube.com/example',
      label: 'Demo Video'
    }],
    featured: false
  }, {
    id: 6,
    title: 'Traffic Management System',
    description: 'An AI-powered traffic management system that optimizes traffic flow at intersections based on real-time vehicle density.',
    longDescription: 'This project implements an intelligent traffic management system that uses computer vision to monitor traffic density at intersections and dynamically adjusts signal timings to optimize flow. The system employs cameras at intersections to count vehicles in each lane and predict traffic patterns. The AI algorithm considers factors like time of day, historical patterns, and special events to make intelligent decisions about signal timing. Simulation results showed a potential reduction in average wait times by 35% during peak hours. The project also includes a dashboard for traffic authorities to monitor and override the system when necessary.',
    image: 'https://images.unsplash.com/photo-1573346544140-7726d6e8a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'ai',
    technologies: ['Computer Vision', 'Python', 'TensorFlow', 'Simulation', 'IoT'],
    year: 2022,
    members: [{
      name: 'Raheem Ismail',
      role: 'AI Developer'
    }, {
      name: 'Yusuf Hameed',
      role: 'System Architect'
    }, {
      name: 'Malik Jahan',
      role: 'Data Scientist'
    }],
    links: [{
      type: 'github',
      url: 'https://github.com/example/traffic-ai',
      label: 'Algorithm Repository'
    }, {
      type: 'document',
      url: 'https://example.com/presentation.pdf',
      label: 'Project Presentation'
    }],
    featured: false,
    awards: ['Smart City Innovation Award 2022']
  }, {
    id: 7,
    title: 'E-Learning Platform',
    description: 'A comprehensive online learning platform tailored for high school students with interactive content, assessments, and progress tracking.',
    longDescription: 'The E-Learning Platform is a web-based educational system designed specifically for high school students. It features course modules aligned with the national curriculum, interactive learning materials, self-assessment quizzes, and progress tracking. The platform includes features like virtual classrooms for live sessions, discussion forums for peer interaction, and a comprehensive dashboard for students to monitor their progress. Teachers can create and assign custom content, track student performance, and provide personalized feedback. The system was piloted in several local schools with positive feedback on engagement and learning outcomes.',
    image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Firebase'],
    year: 2023,
    members: [{
      name: 'Zahra Hussain',
      role: 'Full Stack Developer'
    }, {
      name: 'Ahmed Khan',
      role: 'UI/UX Designer'
    }, {
      name: 'Fathima Noor',
      role: 'Content Developer'
    }],
    links: [{
      type: 'website',
      url: 'https://example.com/e-learning',
      label: 'Platform Demo'
    }, {
      type: 'github',
      url: 'https://github.com/example/e-learning',
      label: 'Source Code'
    }],
    featured: false
  }, {
    id: 8,
    title: 'Drone-based Agricultural Monitoring',
    description: 'A drone system equipped with multispectral cameras to monitor crop health, detect diseases, and optimize farming practices.',
    longDescription: "This project utilizes drone technology equipped with multispectral imaging capabilities to revolutionize agricultural monitoring. The system can survey large agricultural areas efficiently, capturing data on crop health, pest infestations, irrigation effectiveness, and soil conditions. The collected data is processed using specialized algorithms to generate actionable insights for farmers, including vegetation index maps, growth anomaly detection, and treatment recommendations. The project includes a user-friendly interface for farmers to view reports and historical data. Field tests demonstrated the system's ability to detect crop issues weeks before they became visible to the human eye.",
    image: 'https://images.unsplash.com/photo-1586818579954-d7d8d93df4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    category: 'iot',
    technologies: ['Drone', 'Image Processing', 'GPS', 'Python', 'GIS'],
    year: 2021,
    members: [{
      name: 'Yusuf Hameed',
      role: 'Drone Engineer'
    }, {
      name: 'Sameer Abbas',
      role: 'Software Developer'
    }, {
      name: 'Ayesha Farook',
      role: 'Data Analyst'
    }],
    links: [{
      type: 'video',
      url: 'https://youtube.com/example',
      label: 'Drone Footage'
    }, {
      type: 'document',
      url: 'https://example.com/research.pdf',
      label: 'Research Paper'
    }],
    featured: false,
    awards: ['Agricultural Technology Award 2021']
  }, {
    id: 9,
    title: 'Sign Language Translator App',
    description: 'A mobile application that uses computer vision to recognize sign language gestures and translate them into text and speech in real-time.',
    longDescription: "The Sign Language Translator App aims to bridge communication gaps between the deaf and hearing communities. Using the smartphone's camera, the application captures sign language gestures and translates them into text and optional voice output in real-time. The system supports both American Sign Language (ASL) and Sri Lankan Sign Language (SLS), with plans to expand to more sign languages. The machine learning model was trained on a diverse dataset to ensure accuracy across different users and lighting conditions. The app also includes a learning module for users interested in learning basic sign language. User testing with members of the deaf community provided valuable feedback for continuous improvement.",
    image: 'https://images.unsplash.com/photo-1567595747438-aa2858d566db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'mobile',
    technologies: ['TensorFlow Lite', 'Computer Vision', 'React Native', 'NLP', 'Accessibility'],
    year: 2023,
    members: [{
      name: 'Fathima Nizar',
      role: 'ML Engineer'
    }, {
      name: 'Ahmed Farook',
      role: 'Mobile Developer'
    }, {
      name: 'Malik Jahan',
      role: 'UX Researcher'
    }],
    links: [{
      type: 'github',
      url: 'https://github.com/example/sign-translator',
      label: 'Source Code'
    }, {
      type: 'website',
      url: 'https://example.com/sign-app',
      label: 'Project Website'
    }],
    featured: true,
    awards: ['Accessibility Innovation Award 2023']
  }, {
    id: 10,
    title: 'Blockchain-based Academic Credential System',
    description: 'A secure platform using blockchain technology to issue, verify, and share academic credentials, preventing forgery and simplifying verification.',
    longDescription: 'This project implements a blockchain-based system for issuing and verifying academic credentials. The platform allows educational institutions to issue tamper-proof digital certificates and transcripts that can be easily shared and verified by employers or other institutions. The use of blockchain technology ensures that credentials cannot be forged or altered, maintaining the integrity of academic achievements. The system includes a user-friendly interface for students to manage and share their credentials, and a verification portal for third parties to instantly verify the authenticity of shared documents. The project addresses the global problem of credential fraud while streamlining the verification process.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1832&q=80',
    category: 'web',
    technologies: ['Blockchain', 'Ethereum', 'Smart Contracts', 'React', 'Node.js'],
    year: 2022,
    members: [{
      name: 'Raheem Ismail',
      role: 'Blockchain Developer'
    }, {
      name: 'Zahra Hussain',
      role: 'Full Stack Developer'
    }, {
      name: 'Imran Malik',
      role: 'Security Specialist'
    }],
    links: [{
      type: 'github',
      url: 'https://github.com/example/blockchain-credentials',
      label: 'Source Code'
    }, {
      type: 'website',
      url: 'https://example.com/credential-system',
      label: 'Demo Platform'
    }],
    featured: false
  }];
  const categories = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'iot',
    label: 'IoT'
  }, {
    id: 'ai',
    label: 'Artificial Intelligence'
  }, {
    id: 'mobile',
    label: 'Mobile Apps'
  }, {
    id: 'web',
    label: 'Web Applications'
  }, {
    id: 'vr',
    label: 'VR/AR'
  }];
  const technologies = [{
    id: 'all',
    label: 'All Technologies'
  }, {
    id: 'Arduino',
    label: 'Arduino'
  }, {
    id: 'Raspberry Pi',
    label: 'Raspberry Pi'
  }, {
    id: 'TensorFlow',
    label: 'TensorFlow'
  }, {
    id: 'React',
    label: 'React'
  }, {
    id: 'Python',
    label: 'Python'
  }, {
    id: 'Unity',
    label: 'Unity'
  }, {
    id: 'Blockchain',
    label: 'Blockchain'
  }];
  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  const filteredProjects = projects.filter(project => activeFilter === 'all' || project.category === activeFilter).filter(project => activeTech === 'all' || project.technologies.includes(activeTech)).filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase()) || project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())));
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70
      }
    }
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
              Student Innovations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Our Projects
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover innovative projects created by our talented students,
              showcasing their technical skills and creative problem-solving
              abilities.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-8 bg-gray-50 dark:bg-navy-900 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-auto order-2 md:order-1">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <FilterIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Category
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => <motion.button key={category.id} onClick={() => setActiveFilter(category.id)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeFilter === category.id ? 'bg-teal-500 text-white shadow-sm' : 'bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'}`} whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        {category.label}
                      </motion.button>)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <TagIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Technology
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => <motion.button key={tech.id} onClick={() => setActiveTech(tech.id)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeTech === tech.id ? 'bg-blue-500 text-white shadow-sm' : 'bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'}`} whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        {tech.label}
                      </motion.button>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 order-1 md:order-2 ml-auto">
              <div className="relative">
                <input type="text" placeholder="Search projects..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-2 pl-10 bg-white dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-gray-700 dark:text-white" />
                <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      {activeFilter === 'all' && activeTech === 'all' && searchTerm === '' && <section className="py-16 bg-white dark:bg-navy-950">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-navy-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => <motion.div key={project.id} className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all" initial={{
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
          }} whileHover={{
            y: -10
          }}>
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>)}
                        {project.technologies.length > 3 && <span className="inline-block bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                            +{project.technologies.length - 3}
                          </span>}
                      </div>
                      <motion.button onClick={() => toggleProject(project.id)} className="w-full py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400 font-medium rounded-lg transition-colors flex items-center justify-center" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                        View Details
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </motion.div>)}
            </div>
          </div>
        </section>}
      {/* All Projects Section */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-900 dark:text-white">
            {activeFilter === 'all' && activeTech === 'all' && searchTerm === '' ? 'All Projects' : 'Filtered Projects'}
          </h2>
          {filteredProjects.length > 0 ? <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
              {filteredProjects.map(project => <motion.div key={project.id} variants={item} className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-navy-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer" onClick={() => toggleProject(project.id)}>
                    <div className="md:col-span-1">
                      <div className="h-64 md:h-full relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        {project.featured && <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                              Featured
                            </span>
                          </div>}
                      </div>
                    </div>
                    <div className="p-6 md:col-span-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs rounded-full flex items-center">
                          <CalendarIcon className="w-3 h-3 mr-1" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, index) => <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <UsersIcon className="w-4 h-4 mr-2" />
                        <span>
                          Team: {project.members.map(m => m.name).join(', ')}
                        </span>
                      </div>
                      {project.awards && project.awards.length > 0 && <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <AwardIcon className="w-4 h-4 mr-2 mt-0.5" />
                          <div>
                            <span className="font-medium">Awards:</span>
                            <ul className="list-disc list-inside ml-1">
                              {project.awards.map((award, index) => <li key={index}>{award}</li>)}
                            </ul>
                          </div>
                        </div>}
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedProject === project.id && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="border-t border-gray-200 dark:border-navy-700">
                        <div className="p-6">
                          <h4 className="text-lg font-bold mb-4 text-navy-900 dark:text-white">
                            Project Details
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {project.longDescription || project.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h5 className="font-bold text-navy-900 dark:text-white mb-3">
                                Team Members
                              </h5>
                              <ul className="space-y-3">
                                {project.members.map((member, index) => <li key={index} className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 dark:bg-navy-700 rounded-full flex items-center justify-center mr-3">
                                      <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-navy-900 dark:text-white">
                                        {member.name}
                                      </p>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {member.role}
                                      </p>
                                    </div>
                                  </li>)}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-bold text-navy-900 dark:text-white mb-3">
                                Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                  </span>)}
                              </div>
                              {project.links && project.links.length > 0 && <div className="mt-6">
                                  <h5 className="font-bold text-navy-900 dark:text-white mb-3">
                                    Project Links
                                  </h5>
                                  <div className="flex flex-wrap gap-3">
                                    {project.links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-navy-700 hover:bg-gray-200 dark:hover:bg-navy-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors text-sm">
                                        {link.type === 'github' && <GithubIcon className="w-4 h-4 mr-2" />}
                                        {link.type === 'website' && <ExternalLinkIcon className="w-4 h-4 mr-2" />}
                                        {link.type === 'video' && <ExternalLinkIcon className="w-4 h-4 mr-2" />}
                                        {link.type === 'document' && <ExternalLinkIcon className="w-4 h-4 mr-2" />}
                                        {link.label}
                                      </a>)}
                                  </div>
                                </div>}
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <motion.button onClick={() => toggleProject(project.id)} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                              <ChevronUpIcon className="w-5 h-5 mr-1" />
                              Close Details
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.div>)}
            </motion.div> : <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your search criteria.
              </p>
              <button onClick={() => {
            setActiveFilter('all');
            setActiveTech('all');
            setSearchTerm('');
          }} className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Reset Filters
              </button>
            </motion.div>}
        </div>
      </section>
      {/* Submit Project Idea CTA */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }}>
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full" animate={{
              x: [0, 50, 0],
              y: [0, 30, 0]
            }} transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
              <motion.div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full" animate={{
              x: [0, -40, 0],
              y: [0, -20, 0]
            }} transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Have a Project Idea?
                </h2>
                <p className="text-white/90 text-lg mb-0">
                  We're always looking for innovative project ideas. If you have
                  a concept you'd like to explore or need guidance on developing
                  your technical project, our department is here to help.
                </p>
              </div>
              <div>
                <motion.button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg shadow-lg hover:bg-gray-50 transition-colors" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={() => window.location.href = '/contact'}>
                  Submit Your Idea
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Projects;