'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { projects } from '@/lib/projectsData';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsHovered, setProjectsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSection = 'home';

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = sectionId;
          break;
        }
      }
    }

    setIsScrolled(window.scrollY > 50);
    setActiveSection(currentSection);
  };

  useEffect(() => {
    if (!isHomePage) return;
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
        isScrolled ? 'bg-[#fbfbfb]/95 border-gray-100' : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-medium text-[#b92354]"
          style={{ fontFamily: 'Rightland, serif' }}
          whileHover={{ scale: 1.05 }}
        >
          Iram.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 relative">
          {navItems.map((item) => {
            const isProjects = item.id === 'projects';
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => isProjects && setProjectsHovered(true)}
                onMouseLeave={() => isProjects && setProjectsHovered(false)}
              >
                <button
                  onClick={() => {
                    if (!isProjects) handleNavClick(item.id);
                  }}
                  className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                    (isHomePage && activeSection === item.id) ||
                    (!isHomePage && item.id === 'home' && pathname === '/')
                      ? 'text-[#b92354]'
                      : `${isScrolled ? 'text-gray-600' : 'text-black'} hover:text-[#b92354]`
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                  {(isHomePage && activeSection === item.id) ||
                  (!isHomePage && item.id === 'home' && pathname === '/') ? (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b92354]"
                      layoutId="activeSection"
                      transition={{ duration: 0.3 }}
                    />
                  ) : null}
                </button>

                {/* Projects Dropdown */}
                {isProjects && (
                  <AnimatePresence>
                    {isProjectsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 border border-gray-200"
                      >
                        <ul className="py-2 text-left text-sm text-gray-800">
                          {projects.map((proj) => (
                            <li key={proj.slug}>
                              <Link
                                href={`/projects/${proj.slug}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setProjectsHovered(false)}
                              >
                                {proj.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-4 top-12 z-50 bg-white border border-gray-200 w-max rounded-lg shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-start text-sm font-medium text-gray-800 px-4 py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="py-1 px-2 hover:text-[#b92354] text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navigation;
