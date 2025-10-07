import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, TagIcon, ClockIcon, MapPinIcon, ExternalLinkIcon, SearchIcon, FilterIcon } from 'lucide-react';
interface Announcement {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
  isImportant: boolean;
  image?: string;
}
const Announcements = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedAnnouncement, setExpandedAnnouncement] = useState<number | null>(null);
  const announcements: Announcement[] = [{
    id: 1,
    title: 'Annual Technology Exhibition 2023',
    date: '2023-11-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium, Zahira College',
    category: 'event',
    description: "Join us for our Annual Technology Exhibition showcasing innovative projects by our A/L Technology students. This year's theme is 'Sustainable Technology Solutions for a Better Tomorrow'. The exhibition will feature robotics demonstrations, IoT applications, software projects, and more. Parents, students, and technology enthusiasts are all welcome to attend this exciting event. Refreshments will be provided.",
    link: {
      url: '/events/tech-exhibition-2023',
      text: 'View Event Details'
    },
    isImportant: true,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  }, {
    id: 2,
    title: 'Registration Open for Coding Competition',
    date: '2023-10-05',
    category: 'competition',
    description: 'Registration is now open for the Inter-School Coding Competition 2023. Students can participate in various categories including web development, mobile app development, and algorithmic problem solving. Great prizes to be won! Registration deadline is October 20, 2023.',
    link: {
      url: '/competitions/coding-2023',
      text: 'Register Now'
    },
    isImportant: true
  }, {
    id: 3,
    title: 'New Computer Lab Equipment Arrival',
    date: '2023-09-28',
    category: 'facility',
    description: 'We are pleased to announce that our department has received new state-of-the-art computer equipment for Lab 2. The new equipment includes high-performance workstations, graphics tablets, and VR headsets for immersive learning experiences. This upgrade is part of our ongoing commitment to providing students with access to the latest technology tools.',
    isImportant: false
  }, {
    id: 4,
    title: 'Guest Lecture: Artificial Intelligence in Healthcare',
    date: '2023-10-12',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Hall, Technology Building',
    category: 'lecture',
    description: "We are honored to host Dr. Samira Khan, an AI researcher from the University of Colombo, for a guest lecture on 'Applications of Artificial Intelligence in Healthcare'. This lecture will cover recent advancements in AI and their impact on medical diagnostics and patient care. All A/L students are encouraged to attend this informative session.",
    isImportant: false,
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80'
  }, {
    id: 5,
    title: 'Change in Practical Exam Schedule',
    date: '2023-09-20',
    category: 'academic',
    description: 'Please note that the practical examinations for A/L Technology students have been rescheduled. The new dates are from October 5-7, 2023. The detailed schedule with specific timings for each class has been posted on the department notice board. Students are requested to check the schedule and prepare accordingly.',
    isImportant: true
  }, {
    id: 6,
    title: 'Technology Club Membership Drive',
    date: '2023-09-15',
    category: 'club',
    description: 'The Technology Club is now accepting new members for the 2023/2024 academic year. The club offers various activities including coding workshops, robotics projects, and tech discussions. Interested students can collect application forms from the department office. Membership is open to all A/L Technology students.',
    link: {
      url: '/clubs/technology',
      text: 'Learn More About the Club'
    },
    isImportant: false
  }, {
    id: 7,
    title: 'Industry Visit to Microsoft Sri Lanka',
    date: '2023-10-25',
    time: '9:00 AM - 1:00 PM',
    location: 'Microsoft Office, Colombo',
    category: 'field-trip',
    description: 'An industry visit to Microsoft Sri Lanka has been arranged for final year A/L Technology students. This visit will provide insights into corporate technology operations and career opportunities in the tech industry. Transportation will be provided from the college. Students must submit the signed permission form by October 15.',
    isImportant: false,
    image: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  }, {
    id: 8,
    title: 'Technology Department Staff Meeting',
    date: '2023-09-22',
    time: '3:30 PM - 5:00 PM',
    location: 'Staff Room, Technology Building',
    category: 'staff',
    description: 'All teaching and non-teaching staff of the Technology Department are requested to attend a meeting to discuss the upcoming semester plans and examination arrangements. Please bring your course outlines and assessment plans for review.',
    isImportant: false
  }, {
    id: 9,
    title: 'Software Installation Week',
    date: '2023-10-02',
    category: 'facility',
    description: 'The IT support team will be installing new software packages on all laboratory computers during the week of October 2-6. This includes the latest versions of programming IDEs, design software, and simulation tools. Labs will have limited availability during this period. Please check the lab schedule for available slots.',
    isImportant: false
  }, {
    id: 10,
    title: 'Scholarship Opportunity for Technology Students',
    date: '2023-09-18',
    category: 'scholarship',
    description: 'The Ministry of Education has announced a special scholarship program for outstanding A/L Technology students. The scholarship covers university tuition fees and includes a monthly stipend. Eligible students must have excellent academic records and demonstrated technical skills. Application deadline is October 30, 2023.',
    link: {
      url: '/scholarships/ministry-tech-2023',
      text: 'Scholarship Details & Application'
    },
    isImportant: true
  }];
  const categories = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'event',
    label: 'Events'
  }, {
    id: 'academic',
    label: 'Academic'
  }, {
    id: 'competition',
    label: 'Competitions'
  }, {
    id: 'lecture',
    label: 'Lectures'
  }, {
    id: 'facility',
    label: 'Facilities'
  }, {
    id: 'scholarship',
    label: 'Scholarships'
  }];
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const filteredAnnouncements = announcements.filter(announcement => selectedCategory === 'all' || announcement.category === selectedCategory).filter(announcement => announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || announcement.description.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const toggleAnnouncementExpansion = (id: number) => {
    if (expandedAnnouncement === id) {
      setExpandedAnnouncement(null);
    } else {
      setExpandedAnnouncement(id);
    }
  };
  const getCategoryColor = (category: string) => {
    const colors: {
      [key: string]: string;
    } = {
      event: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      competition: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      lecture: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      facility: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      club: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'field-trip': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      staff: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      scholarship: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
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
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Announcements & Updates
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Keep up with the latest news, events, and important information
              from the A/L Technology Department.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-navy-900 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto order-2 md:order-1">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                  <FilterIcon className="w-4 h-4 mr-1" /> Filter:
                </span>
                {categories.map(category => <motion.button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedCategory === category.id ? 'bg-teal-500 text-white shadow-sm' : 'bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    {category.label}
                  </motion.button>)}
              </div>
            </div>
            <div className="w-full md:w-64 order-1 md:order-2">
              <div className="relative">
                <input type="text" placeholder="Search announcements..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-2 pl-10 bg-white dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-gray-700 dark:text-white" />
                <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          {filteredAnnouncements.length > 0 ? <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
              {filteredAnnouncements.map(announcement => <motion.div key={announcement.id} variants={item} className={`bg-white dark:bg-navy-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden ${announcement.isImportant ? 'border-l-4 border-teal-500 dark:border-teal-400' : ''}`}>
                  <div className="cursor-pointer" onClick={() => toggleAnnouncementExpansion(announcement.id)}>
                    <div className="flex flex-col md:flex-row">
                      {announcement.image && <div className="md:w-1/4 h-48 md:h-auto">
                          <img src={announcement.image} alt={announcement.title} className="w-full h-full object-cover" />
                        </div>}
                      <div className={`p-6 ${announcement.image ? 'md:w-3/4' : 'w-full'}`}>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {formatDate(announcement.date)}
                          </span>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                            {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1).replace('-', ' ')}
                          </span>
                          {announcement.isImportant && <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                              Important
                            </span>}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                          {announcement.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {announcement.time && <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              {announcement.time}
                            </span>}
                          {announcement.location && <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPinIcon className="w-4 h-4 mr-1" />
                              {announcement.location}
                            </span>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedAnnouncement === announcement.id && <motion.div initial={{
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
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {announcement.description}
                          </p>
                          {announcement.link && <a href={announcement.link.url} className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                              {announcement.link.text}
                              <ExternalLinkIcon className="w-4 h-4 ml-1" />
                            </a>}
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
                No announcements found matching your search criteria.
              </p>
              <button onClick={() => {
            setSelectedCategory('all');
            setSearchTerm('');
          }} className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Reset Filters
              </button>
            </motion.div>}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto bg-white dark:bg-navy-800 rounded-xl shadow-lg p-8 text-center" initial={{
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
            <h2 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter to receive the latest announcements
              directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 bg-gray-50 dark:bg-navy-700 border border-gray-300 dark:border-navy-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-gray-700 dark:text-white" />
              <motion.button type="submit" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Announcements;