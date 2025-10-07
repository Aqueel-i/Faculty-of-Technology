import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GlobeIcon, LinkedinIcon, ChevronDownIcon, AwardIcon, BookOpenIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
interface StaffMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  education: string[];
  expertise: string[];
  email: string;
  website?: string;
  linkedin?: string;
  featured: boolean;
}
const Staff = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);
  const staffMembers: StaffMember[] = [{
    id: 1,
    name: 'Dr. Ahmed Khan',
    role: 'Head of Department',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: 'Dr. Ahmed Khan has over 20 years of experience in technology education and research. He leads the department with a focus on innovation and practical learning experiences for students.',
    education: ['Ph.D. in Computer Science, University of Colombo', 'M.Sc. in Information Technology, University of Moratuwa', 'B.Sc. in Computer Science, University of Peradeniya'],
    expertise: ['Artificial Intelligence', 'Educational Technology', 'Curriculum Development', 'Software Engineering'],
    email: 'ahmed.khan@zahiracollege.lk',
    website: 'https://ahmed-khan.edu',
    linkedin: 'ahmedkhan',
    featured: true
  }, {
    id: 2,
    name: 'Prof. Fathima Noor',
    role: 'Senior Lecturer',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
    bio: 'Prof. Fathima Noor specializes in electronics and embedded systems. Her research focuses on IoT applications and smart systems development. She has published numerous papers in international journals.',
    education: ['Ph.D. in Electronic Engineering, University of Manchester', 'M.Eng. in Embedded Systems, National University of Singapore', 'B.Sc. in Electronics, University of Moratuwa'],
    expertise: ['Embedded Systems', 'IoT', 'Electronics Design', 'Digital Signal Processing'],
    email: 'fathima.noor@zahiracollege.lk',
    linkedin: 'fathimanoor',
    featured: true
  }, {
    id: 3,
    name: 'Mr. Raheem Ismail',
    role: 'Lecturer',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    bio: 'Mr. Raheem Ismail is a dedicated educator with expertise in programming and web technologies. He has industry experience from leading tech companies before joining academia.',
    education: ['M.Sc. in Computer Science, University of Colombo', 'B.Sc. in Software Engineering, University of Peradeniya'],
    expertise: ['Web Development', 'Programming Languages', 'Database Systems', 'Mobile App Development'],
    email: 'raheem.ismail@zahiracollege.lk',
    featured: false
  }, {
    id: 4,
    name: 'Ms. Zahra Hussain',
    role: 'Lecturer',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
    bio: 'Ms. Zahra Hussain specializes in networking and cybersecurity. She conducts workshops and training sessions on ethical hacking and network security for students.',
    education: ['M.Sc. in Cybersecurity, University of London', 'B.Sc. in Computer Networks, University of Colombo'],
    expertise: ['Network Security', 'Ethical Hacking', 'Cybersecurity', 'Cloud Computing'],
    email: 'zahra.hussain@zahiracollege.lk',
    linkedin: 'zahrahussain',
    featured: false
  }, {
    id: 5,
    name: 'Mr. Imran Malik',
    role: 'Lab Coordinator',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    bio: 'Mr. Imran Malik manages the technology labs and ensures all equipment is maintained and up-to-date. He provides technical support for student projects and practical sessions.',
    education: ['B.Sc. in Information Technology, University of Moratuwa', 'Diploma in Network Administration, NIBM'],
    expertise: ['Lab Management', 'Hardware Maintenance', 'Technical Support', 'Network Administration'],
    email: 'imran.malik@zahiracollege.lk',
    featured: false
  }, {
    id: 6,
    name: 'Dr. Sameer Abbas',
    role: 'Visiting Lecturer',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: 'Dr. Sameer Abbas is an industry expert who visits weekly to conduct specialized sessions on artificial intelligence and machine learning. He works as a senior data scientist at a leading tech company.',
    education: ['Ph.D. in Machine Learning, MIT', 'M.Sc. in Data Science, Stanford University', 'B.Sc. in Computer Science, University of Colombo'],
    expertise: ['Machine Learning', 'Data Science', 'Artificial Intelligence', 'Big Data Analytics'],
    email: 'sameer.abbas@zahiracollege.lk',
    website: 'https://sameerabbas.ai',
    linkedin: 'sameerabbas',
    featured: false
  }, {
    id: 7,
    name: 'Mrs. Ayesha Farook',
    role: 'Academic Coordinator',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: "Mrs. Ayesha Farook coordinates academic activities, curriculum development, and student assessments. She ensures that the department's educational objectives are met effectively.",
    education: ['M.Ed. in Educational Management, University of Colombo', 'B.Sc. in Information Systems, University of London'],
    expertise: ['Academic Administration', 'Curriculum Design', 'Educational Assessment', 'Student Counseling'],
    email: 'ayesha.farook@zahiracollege.lk',
    featured: false
  }, {
    id: 8,
    name: 'Mr. Yusuf Hameed',
    role: 'Technical Instructor',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    bio: 'Mr. Yusuf Hameed conducts practical sessions and workshops on hardware, robotics, and electronics. He guides students in developing hands-on technical skills through project-based learning.',
    education: ['B.Eng. in Mechatronics, University of Moratuwa', 'Diploma in Robotics, NIBM'],
    expertise: ['Robotics', 'Electronics', 'Microcontrollers', '3D Printing', 'PCB Design'],
    email: 'yusuf.hameed@zahiracollege.lk',
    featured: false
  }];
  const filteredStaff = activeTab === 'all' ? staffMembers : activeTab === 'featured' ? staffMembers.filter(member => member.featured) : staffMembers.filter(member => member.role.toLowerCase().includes(activeTab));
  const openMemberDetails = (member: StaffMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };
  const closeMemberDetails = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };
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
              Meet Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Our Dedicated Staff
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Get to know the experienced educators and professionals who are
              shaping the future of technology education at Zahira College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Filter Tabs */}
      <section className="py-8 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {['all', 'featured', 'lecturer', 'coordinator', 'head'].map(tab => <motion.button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-teal-500 text-white shadow-md' : 'bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>)}
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }}>
            {filteredStaff.map(member => <motion.div key={member.id} variants={item} whileHover={{
            y: -10,
            transition: {
              type: 'spring',
              stiffness: 300
            }
          }} className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {member.featured && <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </div>}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      <motion.button onClick={() => window.open(`mailto:${member.email}`)} className="w-8 h-8 bg-white dark:bg-navy-700 rounded-full flex items-center justify-center shadow-md" whileHover={{
                    y: -3
                  }}>
                        <MailIcon className="w-4 h-4 text-teal-500" />
                      </motion.button>
                      {member.website && <motion.button onClick={() => window.open(member.website, '_blank')} className="w-8 h-8 bg-white dark:bg-navy-700 rounded-full flex items-center justify-center shadow-md" whileHover={{
                    y: -3
                  }}>
                          <GlobeIcon className="w-4 h-4 text-blue-500" />
                        </motion.button>}
                      {member.linkedin && <motion.button onClick={() => window.open(`https://linkedin.com/in/${member.linkedin}`, '_blank')} className="w-8 h-8 bg-white dark:bg-navy-700 rounded-full flex items-center justify-center shadow-md" whileHover={{
                    y: -3
                  }}>
                          <LinkedinIcon className="w-4 h-4 text-blue-700" />
                        </motion.button>}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-navy-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 2).map((skill, index) => <span key={index} className="inline-block bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>)}
                    {member.expertise.length > 2 && <span className="inline-block bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                        +{member.expertise.length - 2}
                      </span>}
                  </div>
                  <motion.button onClick={() => openMemberDetails(member)} className="w-full py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400 font-medium rounded-lg transition-colors flex items-center justify-center" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    View Profile
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>)}
          </motion.div>
          {filteredStaff.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No staff members found matching your filter.
              </p>
            </motion.div>}
        </div>
      </section>

      {/* Staff Member Detail Modal */}
      {selectedMember && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeMemberDetails}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} transition={{
        type: 'spring',
        damping: 25
      }} className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-teal-300 text-lg">{selectedMember.role}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 text-teal-500 mr-2" />
                  <a href={`mailto:${selectedMember.email}`} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {selectedMember.email}
                  </a>
                </div>
                {selectedMember.website && <div className="flex items-center">
                    <GlobeIcon className="w-5 h-5 text-blue-500 mr-2" />
                    <a href={selectedMember.website} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Personal Website
                    </a>
                  </div>}
                {selectedMember.linkedin && <div className="flex items-center">
                    <LinkedinIcon className="w-5 h-5 text-blue-700 mr-2" />
                    <a href={`https://linkedin.com/in/${selectedMember.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      LinkedIn
                    </a>
                  </div>}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white flex items-center">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-teal-500" />{' '}
                    Biography
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedMember.bio}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white flex items-center">
                    <AwardIcon className="w-5 h-5 mr-2 text-teal-500" /> Areas
                    of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => <span key={index} className="inline-block bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white flex items-center">
                  <GraduationCapIcon className="w-5 h-5 mr-2 text-teal-500" />{' '}
                  Education
                </h3>
                <ul className="space-y-2">
                  {selectedMember.education.map((edu, index) => <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {edu}
                      </span>
                    </li>)}
                </ul>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-navy-700 flex justify-end">
              <motion.button onClick={closeMemberDetails} className="px-6 py-2 bg-gray-200 dark:bg-navy-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors hover:bg-gray-300 dark:hover:bg-navy-600" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>}

      {/* Join Our Team CTA */}
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
                  Join Our Teaching Team
                </h2>
                <p className="text-white/90 text-lg mb-0">
                  We're always looking for talented educators and technology
                  professionals to join our department. If you're passionate
                  about technology education and want to make a difference, get
                  in touch with us.
                </p>
              </div>
              <div>
                <motion.button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg shadow-lg hover:bg-gray-50 transition-colors" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Staff;