
'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div 
            className="text-2xl font-bold text-[#fffff]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Iram Ramzan
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © 2025 Designer Portfolio. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Designed & Developed with ❤️
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Creating beautiful digital experiences one project at a time
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
