'use client';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import React from 'react';
import { Project } from "@/lib/projectsData";
import Navbar from './Navigation';
import Footer from './Footer';
import BackToHomeButton from './BackToHomeButton';

interface Props {
  project: Project;
}

const WebsiteProjectDetail: React.FC<Props> = ({ project }) => {
  return (
    <>
      <Navbar />
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-[#111] font-poppins">
        
        {/* Title Section */}
<ScrollReveal>
  <div className="flex justify-between items-center mb-[140px] mt-[20px]">
    {/* Title and Subtitle */}
    <div className="flex flex-col justify-center">
      <h1 className="text-[65px] font-bold text-[#1653AE] tracking-[-2.32px] uppercase leading-none font-poppins">
        {project.title}
      </h1>

      {project.subtitle && (
        <p className="text-[24px] font-medium text-[#44494F] mt-[10px] tracking-tight uppercase font-poppins">
          {project.subtitle}
        </p>
      )}
    </div>

    {/* Logo */}
    <div className="w-[162px] h-[162px] flex items-center justify-center">
      <img
        src="/images/logo1.png"
        alt="Project Logo"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</ScrollReveal>

        {/* Overview */}
        <ScrollReveal delay={0.1}>
          <section className="mb-14">
            <h2 className="text-[26px] font-medium uppercase mb-4">
              PROJECT <span className="text-[#191F9A]">OVERVIEW</span>
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#000000]">
              {project.overview}
            </p>
          </section>
        </ScrollReveal>

        {/* Cover Image 1 */}
        {project.coverImages?.[0] && (
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-16">
              <div className="relative w-fit">
                <Image
                  src={project.coverImages[0]}
                  alt="Cover Image 1"
                  width={618}
                  height={655}
                  className="object-cover w-full h-auto rounded-xl mt-2 relative z-10"
                />
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3}>
            <section className="mb-20">
                <h2 className="text-[26px] font-medium uppercase mb-4">
                PROBLEM <span className="text-[#191F9A]">STATEMENT</span>
                </h2>
                <p className="text-base leading-relaxed text-[#000000]">
                {project.problemStatement}
                </p>
            </section>
         </ScrollReveal>
 
        {/* My contribution */}
        <ScrollReveal delay={0.4}>
          <section className="mb-20">
              <h2 className="text-[26px] font-medium uppercase mb-4">
                My <span className="text-[#191F9A]">Contribution</span>
              </h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.goals?.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
           </section>
        </ScrollReveal>
        {/* The Impact*/}
        <ScrollReveal delay={0.4}>
          <section className="mb-20">
              <h2 className="text-[26px] font-medium uppercase mb-4">
                The <span className="text-[#191F9A]">Impact</span>
              </h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.designProcess?.map((designProcess, i) => (
                    <li key={i}>{designProcess}</li>
                  ))}
                </ul>
           </section>
        </ScrollReveal>

        {/* Typography & Colors */}
        <ScrollReveal delay={0.5}>
          <section className="mb-20">
            <h2 className="text-[26px] font-medium uppercase mb-6">
              TYPOGRAPHY <span className="text-[#191F9A]">& COLORS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center mb-4 gap-2">
                   <div className="w-4 h-4 rounded-full bg-[#B5B7DD] relative">
                    <div className="w-2 h-2 bg-[#191F9A] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                    <span className="text-md font-semibold">Font Used</span>
                </div>
                <h3 className="text-2xl font-bold text-[#191F9A] mb-2">{project.typography?.fontUsed}</h3>
                {project.typography?.previewText && (
                  <p className="font-poppins text-sm leading-6 text-[#444] whitespace-pre-line">
                    {project.typography.previewText}
                  </p>
                )}
              </div>

              <div className="bg-[#E0E1EF] p-4 rounded-xl drop-shadow-sm text-sm space-y-2 w-full max-w-[280px]">
                {project.typography?.weights?.map((weight, i) => (
                    <div
                    key={i}
                    className={`flex justify-between items-center border-b border-dashed last:border-none pb-1 text-[#444] ${
                        weight.toLowerCase().includes('bold') ? 'font-bold'
                        : weight.toLowerCase().includes('medium') ? 'font-medium'
                        : weight.toLowerCase().includes('regular') ? 'font-normal'
                        : 'font-light'
                    }`}
                    >
                    <span>Ubuntu</span>
                    <span>{weight}</span>
                    </div>
                ))}
                </div>

            </div>

            {/* Color Swatches */}
            <section className="mt-10">
              <div className="flex items-center mb-4 gap-2">
                 <div className="w-4 h-4 rounded-full bg-[#B5B7DD] relative">
                    <div className="w-2 h-2 bg-[#191F9A] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <h2 className="text-md font-semibold">Colors Used</h2>
              </div>

              <div className="flex justify-start gap-6 flex-wrap">
                {[{ hex: "#191F9A", label: "Primary" }, { hex: "#44494F", label: "Primary" },
                  { hex: "#C9C9C9", label: "Secondary" }, { hex: "#E9F6FE", label: "Secondary" },
                  { hex: "#FFFDFD", label: "bgColor" }].map((color, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-1 group">
                    <svg className="w-16 h-16 transition-all duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill={color.hex} xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M80.9,62.5c3.6-8.3,4.1-17.4,1.3-25.9C78.4,24,69.8,13.5,58.4,10.3C48.2,7.3,36.2,9.9,27.5,16.4
                      C18.3,23.3,11.8,34.5,15.7,47c3.6,11.3,13.3,18.9,23.2,23.4c9.5,4.2,20.1,6.6,29.5,1.9C74.7,70.2,78.2,67.3,80.9,62.5z"
                        className="transition-all duration-700 ease-in-out origin-center group-hover:rotate-1"
                      />
                    </svg>
                    <div className="text-sm font-medium">{color.label}</div>
                    <div className="text-xs text-gray-600">{color.hex}</div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <section>
            <h2 className="text-[26px] font-medium mb-10">
              The <span className="text-[#191F9A]">Design</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 items-start">
              {project.wireframes?.map((img, i) => (
                <div
                  key={i}
                  className="flex justify-center items-start mt-[4]"
                >
                  <Image
                    src={img}
                    alt={`Wireframe ${i + 1}`}
                    width={500}
                    height={800}
                    className="rounded-2xl drop-shadow-md object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>



        {/* CTA Section */}
        <ScrollReveal delay={0.7}>
          <div className="flex justify-between items-center mt-20 px-4 sm:px-12">
            <a
              href="https://www.figma.com/proto/kZGy75D27mRa71i0ZP8hw3/Securely-Innovations?page-id=0%3A1&node-id=2122-2410&viewport=539%2C493%2C0.08&t=jkxbWInAOAMpXovK-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2122%3A2410&hide-ui=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-gray-800 hover:underline"
            >
              View full Website prototype ↗
            </a>
            <div className="text-3xl sm:text-[36px] font-bold text-[#191F9A9]">
              14+ Pages
            </div>
          </div>
        </ScrollReveal>
      </div>
      <BackToHomeButton />
      <Footer />
    </>
  );
};

export default WebsiteProjectDetail;
