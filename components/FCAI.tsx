'use client';
import { Project } from "@/lib/projectsData"; 
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';
import React from 'react';
import Navbar from './Navigation';
import Footer from './Footer';
import BackToHomeButton from './BackToHomeButton';

interface Props {
  project: Project;
}

const FCAIProjectDetail: React.FC<Props> = ({ project }) => {
  return (
    <>
      <Navbar />
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-[#111] font-poppins">
        
        {/* Title Section */}
        <ScrollReveal>
          <div className="flex justify-between items-start mb-[140px] mt-[20px]">
            <div>
              <h1 className="text-[72px] font-bold text-[#002147] tracking-[-2.32px] uppercase leading-none">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-[18px] font-normal  uppercase text-black mt-[2px]">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Overview */}
        <ScrollReveal delay={0.1}>
          <section className="mb-2">
            <h2 className="text-[26px] font-medium uppercase mb-4">
              PROJECT <span className="text-[#002147]">OVERVIEW</span>
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#000000]">
              {project.overview}
            </p>
          </section>
        </ScrollReveal>

        {/* Cover Image 1 */}
        {project.coverImages?.[0] && (
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-2">
              <div className="relative w-fit">
                <Image
                  src={project.coverImages[0]}
                  alt="Cover Image 1"
                  width={1038}
                  height={500}
                  className="object-cover w-full h-auto rounded-xl mt-2 relative z-10"
                />
                <div/>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Problem Statement*/}
        <ScrollReveal delay={0.3}>
          <section className="mb-20 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="text-[26px] font-medium uppercase mb-4">
                PROBLEM <span className="text-[#002147]">STATEMENT</span>
              </h2>
              <p className="text-base leading-relaxed text-[#000000]">
                {project.problemStatement}
              </p>
            </div>            
          </section>
        </ScrollReveal>

        {/* The Goals*/}
                <ScrollReveal delay={0.4}>
                  <section className="mb-20">
                      <h2 className="text-[26px] font-medium uppercase mb-4">
                        The <span className="text-[#002147]">Goals</span>
                      </h2>
                        <ul className="list-disc pl-5 text-gray-700">
                          {project.goals?.map((goals, i) => (
                            <li key={i}>{goals}</li>
                          ))}
                        </ul>
                   </section>
                </ScrollReveal>

        {/* Typography & Colors */}
        <ScrollReveal delay={0.5}>
          <section className="mb-20">
            <h2 className="text-[26px] font-medium uppercase mb-6">
              TYPOGRAPHY <span className="text-[#002147]">& COLORS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center mb-4 gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#C5C9DE] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#002147] rounded-full"></div>
                  </div>
                  <span className="text-md font-semibold">Font Used</span>
                </div>
                <h3 className="text-2xl font-bold text-[#002147] mb-2">{project.typography?.fontUsed}</h3>
                {project.typography?.previewText && (
                  <p className="font-poppins text-sm leading-6 text-[#444] whitespace-pre-line">
                    {project.typography.previewText}
                  </p>
                )}
              </div>

              <div className="bg-[#C5C9DE] p-2 rounded-xl drop-shadow-sm text-sm space-y-[2px] inline-block w-fit max-w-[280px]">
                {project.typography?.weights?.map((weight, i) => (
                  <div
                    key={i}
                    className={`flex w-fit items-center border-b last:border-b-0 border-dashed pb-[2px] text-[#444] ${
                      weight.toLowerCase().includes('black') ? 'font-black'
                        : weight.toLowerCase().includes('extra bold') ? 'font-extrabold'
                        : weight.toLowerCase().includes('bold') ? 'font-bold'
                        : weight.toLowerCase().includes('semi bold') ? 'font-semibold'
                        : weight.toLowerCase().includes('medium') ? 'font-medium'
                        : weight.toLowerCase().includes('regular') ? 'font-normal'
                        : weight.toLowerCase().includes('light') ? 'font-light'
                        : 'font-thin'
                    }`}
                  >
                    <span className="mr-[94px]">Railway</span>
                    <span>{weight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <section className="mt-10">
              <div className="flex items-center mb-4 gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C5C9DE] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#002147] rounded-full"></div>
                </div>
                <h2 className="text-md font-semibold">Colors Used</h2>
              </div>

              <div className="flex justify-start gap-6 flex-wrap">
                {[{ hex: "#002147", label: "Primary" }, 
                  { hex: "#F5F5F5", label: "bg-color" }].map((color, index) => (
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

        {/* Wireframes */}
        <ScrollReveal delay={0.6}>
          <section>
            <h2 className="text-[26px] font-medium mb-12">
              The <span className="text-[#002147]">Design</span>
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
              href="https://www.figma.com/proto/dzHR0KVHmbDDoX9BvEFbSM/FCAI?page-id=0%3A1&node-id=99-247&viewport=682%2C566%2C0.2&t=av7SmzUuaohwGlb9-8&scaling=scale-down-width&content-scaling=fixed&hide-ui=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-gray-800 hover:underline"
            >
              View Website Prototype ↗
            </a>
            
          </div>
        </ScrollReveal>
      </div>
      <BackToHomeButton />
      <Footer />
    </>
  );
};

export default FCAIProjectDetail;
