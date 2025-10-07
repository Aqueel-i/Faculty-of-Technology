import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon, DownloadIcon, InfoIcon } from 'lucide-react';
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description?: string;
  date: string;
  photographer?: string;
}
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const categories = [{
    id: 'all',
    label: 'All Photos'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'students',
    label: 'Students'
  }, {
    id: 'facilities',
    label: 'Facilities'
  }, {
    id: 'competitions',
    label: 'Competitions'
  }];
  const galleryImages: GalleryImage[] = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Students working on a robotics project',
    category: 'projects',
    description: 'A group of final year students working on their advanced robotics project, which won first place at the National Technology Exhibition.',
    date: 'March 15, 2023',
    photographer: 'Ahmed Khan'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Technology exhibition',
    category: 'events',
    description: 'Annual Technology Exhibition 2023 showcasing student projects and innovations from various technology disciplines.',
    date: 'May 7, 2023',
    photographer: 'Fathima Noor'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Coding competition',
    category: 'competitions',
    description: 'Students participating in the Inter-School Coding Challenge, where our team secured second place overall.',
    date: 'February 22, 2023',
    photographer: 'Raheem Ismail'
  }, {
    id: 4,
    src: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Computer lab',
    category: 'facilities',
    description: 'Our newly renovated computer laboratory featuring state-of-the-art equipment and ergonomic workstations.',
    date: 'January 10, 2023',
    photographer: 'Zahra Hussain'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    alt: 'Group study session',
    category: 'students',
    description: 'A/L Technology students collaborating during a study session in preparation for their final examinations.',
    date: 'June 5, 2023',
    photographer: 'Imran Malik'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Arduino workshop',
    category: 'events',
    description: 'Hands-on Arduino workshop conducted for junior students by our senior technology team.',
    date: 'April 18, 2023',
    photographer: 'Sameer Abbas'
  }, {
    id: 7,
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Smart home project',
    category: 'projects',
    description: 'A demonstration of the smart home automation system developed by our final year students using IoT technology.',
    date: 'May 30, 2023',
    photographer: 'Ayesha Farook'
  }, {
    id: 8,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Electronics lab',
    category: 'facilities',
    description: 'Our specialized electronics laboratory equipped with oscilloscopes, function generators, and circuit design tools.',
    date: 'March 3, 2023',
    photographer: 'Yusuf Hameed'
  }, {
    id: 9,
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Hackathon winners',
    category: 'competitions',
    description: 'Our team celebrating their victory at the National Schools Hackathon 2023 with their innovative healthcare solution.',
    date: 'July 12, 2023',
    photographer: 'Ahmed Khan'
  }, {
    id: 10,
    src: 'https://anyonego.com/wp-content/uploads/2019/12/blog-04-2.jpg',
    alt: '3D printing demonstration',
    category: 'events',
    description: 'A demonstration of our new 3D printer during the Technology Open Day for prospective students and parents.',
    date: 'February 8, 2023',
    photographer: 'Fathima Noor'
  }, {
    id: 11,
    src: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Student presentation',
    category: 'students',
    description: 'A student presenting her final year project on artificial intelligence applications in agriculture to the evaluation panel.',
    date: 'June 22, 2023',
    photographer: 'Raheem Ismail'
  }, {
    id: 12,
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Drone project',
    category: 'projects',
    description: 'Testing phase of the autonomous drone project developed for environmental monitoring applications.',
    date: 'April 5, 2023',
    photographer: 'Zahra Hussain'
  }, {
    id: 13,
    src: 'https://i0.wp.com/www.ennobleip.com/wp-content/uploads/2021/03/1612517812.jpeg?resize=1170%2C480&ssl=1',
    alt: 'VR experience',
    category: 'facilities',
    description: 'Students experiencing virtual reality applications in our new immersive technology lab.',
    date: 'May 15, 2023',
    photographer: 'Imran Malik'
  }, {
    id: 14,
    src: 'https://media.licdn.com/dms/image/v2/C5612AQE9K_h4Ud00bQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1526988648570?e=2147483647&v=beta&t=MMMcgc7VYlrq4-95pZHiusoCRK9R8nyZEi3Ufukgh6M',
    alt: 'Guest lecture',
    category: 'events',
    description: 'Industry expert delivering a guest lecture on cybersecurity trends and career opportunities in the digital security field.',
    date: 'March 28, 2023',
    photographer: 'Sameer Abbas'
  }, {
    id: 15,
    src: 'https://www.seattleschools.org/wp-content/uploads/2022/06/Robotics_FranklinTeam.jpg',
    alt: 'Robotics team',
    category: 'students',
    description: 'Our robotics team preparing for the upcoming international robotics competition in Singapore.',
    date: 'July 3, 2023',
    photographer: 'Ayesha Farook'
  }];
  const filteredImages = activeCategory === 'all' ? galleryImages : galleryImages.filter(image => image.category === activeCategory);
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    setShowInfo(false);
    document.body.style.overflow = 'auto';
  };
  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
    setShowInfo(false);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
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
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Department Gallery
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Explore snapshots of our events, student projects, facilities, and
              memorable moments from the A/L Technology Department.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-navy-900 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => <motion.button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id ? 'bg-teal-500 text-white shadow-md' : 'bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {category.label}
              </motion.button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => <motion.div key={image.id} className="break-inside-avoid" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} viewport={{
            once: true,
            margin: '0px 0px -200px 0px'
          }}>
                <div className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group" onClick={() => openLightbox(image)}>
                  <motion.img src={image.src} alt={image.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" whileHover={{
                scale: 1.03
              }} layoutId={`image-${image.id}`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">
                      {image.alt}
                    </h3>
                    <p className="text-gray-200 text-sm">{image.date}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
          {filteredImages.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No images found in this category.
              </p>
              <button onClick={() => setActiveCategory('all')} className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                View All Photos
              </button>
            </motion.div>}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="absolute top-4 right-4 z-10 flex space-x-3">
              <motion.button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={e => {
            e.stopPropagation();
            toggleInfo();
          }}>
                <InfoIcon className="w-6 h-6" />
              </motion.button>
              <motion.button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={e => {
            e.stopPropagation();
            // This would typically trigger a download
            window.open(selectedImage.src, '_blank');
          }}>
                <DownloadIcon className="w-6 h-6" />
              </motion.button>
              <motion.button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={closeLightbox}>
                <XIcon className="w-6 h-6" />
              </motion.button>
            </div>
            <motion.button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          navigateImage('prev');
        }}>
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
            <motion.button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={e => {
          e.stopPropagation();
          navigateImage('next');
        }}>
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
            <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
              <motion.img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain" layoutId={`image-${selectedImage.id}`} onClick={e => e.stopPropagation()} />
            </div>
            <AnimatePresence>
              {showInfo && <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 50
          }} className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12" onClick={e => e.stopPropagation()}>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {selectedImage.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                    <span>Date: {selectedImage.date}</span>
                    {selectedImage.photographer && <span>Photo by: {selectedImage.photographer}</span>}
                    <span className="capitalize">
                      Category: {selectedImage.category}
                    </span>
                  </div>
                </motion.div>}
            </AnimatePresence>
          </motion.div>}
      </AnimatePresence>

      {/* Submit Photos CTA */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto" initial={{
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
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white">
                  Have Photos to Share?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  If you have photos from department events, projects, or
                  activities that you'd like to contribute to our gallery, we'd
                  love to see them!
                </p>
                <motion.button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors inline-flex items-center" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={() => window.location.href = '/contact'}>
                  Submit Your Photos
                </motion.button>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-3">
                  <motion.div className="rounded-lg overflow-hidden" whileHover={{
                  scale: 1.05,
                  rotate: -2
                }}>
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Submit your photos" className="w-full h-auto" />
                  </motion.div>
                  <motion.div className="rounded-lg overflow-hidden" whileHover={{
                  scale: 1.05,
                  rotate: 2
                }}>
                    <img src="https://authorservices.taylorandfrancis.com/wp-content/uploads/2022/10/Submission_5.png" alt="Submit your photos" className="w-full h-auto" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Gallery;