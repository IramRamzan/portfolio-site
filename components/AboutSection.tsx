'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const experience = [
    { year: 'July 2024 - June 2025', role: 'UI/Ux and Graphics Intern ', company: 'Securely Innovations, Pakistan' },
    { year: 'July 2024 - PRESENT', role: 'Graphics Lead ', company: 'The Youth Matrix Chapter' },
    { year: 'September 2023 - PRESENT', role: 'Freelance Projects', company: 'Completed 15+ Projects' }
  ];

  const education = [
    { year: 'October 2022 - PRESENT', degree: 'Bachelor of Computer Science', school: 'Air University, Multan' }
  ];

  const courses = [
    { year: 'January 2024- June 2024', course: 'Foundation of UI/UX', platform: 'Coursera' }
  ];

  const softwareTools = [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', bg: 'bg-purple-100' },
    { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', bg: 'bg-pink-100' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', bg: 'bg-orange-100' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', bg: 'bg-blue-100' },
    { name: 'Canva', icon: '/images/canva_icon.png', bg: 'bg-cyan-100' },
  ];

  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Profile Image with Animated Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Animated SVGs */}
            <motion.div
              className="absolute -top-8 -left-8 w-12 h-12"
              animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#b92354]">
                <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" fill="currentColor" opacity="0.3" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-8 h-8"
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full h-full bg-[#b92354] rounded-full opacity-40"></div>
            </motion.div>

            <motion.div
              className="absolute top-16 -right-8 w-6 h-6"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#b92354]">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 
                  7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                  6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                  opacity="0.4"
                />
              </svg>
            </motion.div>

            <motion.div
  className="relative group max-w-md mx-auto"
  whileHover={{ scale: 1.05, rotate: 2 }}
  transition={{ duration: 0.3, type: 'spring' }}
>
  <div className="relative p-4">
    <Image
      src="/images/card_image.png"
      alt="Profile"
      width={500}
      height={600}
      className="w-full h-auto object-cover object-top rounded-[3rem] 
                 drop-shadow-[0_0_35px_rgba(33,33,33,0.10)]"
      priority
    />
  </div>
</motion.div>

          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 font-poppins">
                Hi, I'm <span className="text-[#b92354]">Iram</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-poppins">
                I'm a UI/UX and Graphic Designer who truly loves what I do. For me, design is not just about making things look good—it's about making them feel right, work well, and connect with people. I care deeply about creating experiences that are easy to use, meaningful, and visually appealing.
              </p>
            </div>

            {/* Grid: Experience, Education, Courses, Software */}
            <div className="grid md:grid-cols-2 gap-x-10">
              <div className="flex flex-col gap-10">
                {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-[#b92354] mb-4 font-poppins">EXPERIENCE</h3>
                <div className="space-y-4">
                  {experience.map((item, i) => (
                    <div key={i} className="border-l-2 border-[#b92354]/20 pl-4">
                      <p className="text-sm font-semibold text-gray-900 font-poppins">{item.role}</p>
                      <p className="text-xs text-gray-700 font-medium">{item.company}</p>
                      <p className="text-xs text-[#974946] font-medium">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-[#b92354] mb-4 font-poppins">EDUCATION</h3>
                <div className="space-y-4">
                  {education.map((item, i) => (
                    <div key={i} className="border-l-2 border-[#b92354]/20 pl-4">
                      <p className="text-sm font-semibold text-gray-900 font-poppins">{item.degree}</p>
                      <p className="text-xs text-gray-700 font-medium">{item.school}</p>
                      <p className="text-xs text-[#974946] font-medium">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              </div>
              <div className="flex flex-col gap-10">
                {/* Courses */}
              <div>
                <h3 className="text-xl font-bold text-[#b92354] mb-4 font-poppins">COURSES</h3>
                <div className="space-y-4">
                  {courses.map((item, i) => (
                    <div key={i} className="border-l-2 border-[#b92354]/20 pl-4">
                      <p className="text-sm font-semibold text-gray-900 font-poppins">{item.course}</p>
                      <p className="text-xs text-gray-700 font-medium">{item.platform}</p>
                      <p className="text-xs text-[#974946] font-medium">{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tools */}
              <div>
                <h3 className="text-xl font-bold text-[#b92354] mb-4 font-poppins">SOFTWARES</h3>
                <div className="flex flex-wrap gap-5">
                  {softwareTools.map((tool, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, rotate: -5, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-14 h-14 ${tool.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Image src={tool.icon} alt={tool.name} width={28} height={28} className="object-contain" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1 font-poppins">{tool.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
