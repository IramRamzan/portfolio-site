'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection /> 

      {/* Floating card on top of footer */}
      <div className="relative">
        <ContactSection />

        <motion.div
          className="hidden md:block absolute right-10 bottom-[-50px] z-30"
          initial={{ opacity: 0, rotate: 20, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-2xl rotate-[-6deg] border-4 border-white">
            <img
              src="/images/card_image.png"
              alt="Iram Card"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
