'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'UI/UX', 'Graphics', 'Logos'];

  const projects = [
    {
      id: 1,
      title: 'Rideasy Mobile App',
      category: 'UI/UX',
      description: 'A simple Ride sharing app which helps you travel daily with safe, easy, and affordable rides..',
      image: '/images/ridee.png',
      slug: 'rideasy-mobile-app'
    },
    {
      id: 9,
      title: 'Cyber Security Logo',
      category: 'Logos',
      description: 'Designed a CyberSecurity Logo for a Competition.',
      image: '/images/CYS.png',
      slug: 'cyber-security-logo'
    },
    {
      id: 2,
      title: 'Securely Innovations',
      category: 'UI/UX',
      description: 'A website which is designed for delivering user-friendly software solutions to drive success',
      image: '/images/secure.png',
      slug: 'securely-innovations'
    },
    {
      id: 3,
      title: 'Oman Oasis ',
      category: 'UI/UX',
      description: 'A website designed for delivering pure bottled water with reliable, convenient service in Oman..',
      image: '/images/oasis.png',
      slug: 'oman-oasis'
    },
    {
      id: 13,
      title: 'Virtual Assisstant ',
      category: 'UI/UX',
      description: 'Designed a demo Website and App for the hiring of Virtual Assistant.',
      image: '/images/Demo.png',
      slug: 'virtual-assistant'
    },
    {
      id: 4,
      title: 'Renovate-o-Matic',
      category: 'UI/UX',
      description: 'A website designed for home renovation services, transforming spaces with quality work..',
      image: '/images/Renovate.png',
      slug: 'renovate-o-matic'
    },
    {
      id: 11,
      title: 'Eid Posters',
      category: 'Graphics',
      description: 'Designed Eid-al-Adha posters for TYM and Securely Innovations.',
      image: '/images/Eid.png',
      slug: 'eid-poster'
    },
    {
      id: 5,
      title: 'FCAI',
      category: 'UI/UX',
      description: 'A website Designed for Research and Enterprise program, equipping students with advanced skills,.',
      image: '/images/FCAI.png',
      slug: 'fcai'
    },
    {
      id: 7,
      title: 'TYM Contest',
      category: 'Graphics',
      description: 'Warm and inviting Contest held by The Youth Matrix Chapter.',
      image: '/images/Newbattle.png',
      slug: 'tym-contest'
    },
    {
      id: 8,
      title: 'TYM Logo',
      category: 'Logos',
      description: 'Designed Different Varients of The Youth Matrix (TYM) Logo.',
      image: '/images/tym.png',
      slug: 'TYM Logo'
    },
    {
      id: 6,
      title: 'Endcodersden Website',
      category: 'UI/UX',
      description: 'A website which delivers smart tech solutions, helping businesses grow with custom solutions.',
      image: '/images/Encodersden.png',
      slug: 'encodersden'
    },
    {
      id: 12,
      title: 'TYM Posters',
      category: 'Graphics',
      description: 'Designed posters for the TYM Fellowship.',
      image: '/images/poster.png',
      slug: 'TYM Posters'
    }
    
    // {
    //   id: 10,
    //   title: 'TYM Fellowship',
    //   category: 'Graphics',
    //   description: 'Designed Summer Fellowship 2025 Posters for TYM .',
    //   image: '/images/Fellowship.png',
    //   slug: 'TYM Fellowship'
    // }
    
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#fbfbfb]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[#b92354] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Here are some of my recent projects that showcase my skills in UI/UX design and graphic design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#b92354] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-[#b92354] hover:text-white'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-[#b92354] bg-[#b92354]/10 px-3 py-1 rounded-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b92354] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-[#b92354] font-medium group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <span className="text-sm">View Project</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
