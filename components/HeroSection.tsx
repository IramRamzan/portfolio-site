'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div className="sm:hidden absolute inset-0 z-0">
        <Image
          src="/images/mobile2.png" // Replace with your mobile background
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/images/hero-image.png" 
          alt="Desktop Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      {/* Buttons Overlay on Image */}
<div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 z-30">
  <motion.button
    onClick={scrollToProjects}
    className="px-8 py-3 sm:px-8 sm:py-3 px-5 py-2 min-w-[180px] sm:min-w-[220px] bg-[#b92354] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#9a2046] transition-all duration-300 flex items-center justify-center gap-2"
    style={{ fontFamily: 'Poppins, sans-serif' }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View My Work
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </motion.button>

  <motion.button
    onClick={scrollToContact}
    className="px-8 py-3 sm:px-8 sm:py-3 px-5 py-2 min-w-[190px] sm:min-w-[240px] border-2 border-white bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-[#b92354] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
    style={{ fontFamily: 'Poppins, sans-serif' }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      boxShadow: [
        '0 0 0 0 rgba(255, 255, 255, 0)',
        '0 0 0 8px rgba(255, 255, 255, 0.1)',
        '0 0 0 0 rgba(255, 255, 255, 0)',
      ],
    }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
  >
    Let’s Work Together
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </motion.button>
</div>



    </section>
  );
};

export default HeroSection;
