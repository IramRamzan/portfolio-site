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

const FellowshipProjectDetail = ({ project }: { project: Project }) => {
  return (
        <>
      <Navbar />
    <div className="max-w-[1280px] mx-auto px-6 py-20 font-poppins">
      <ScrollReveal>
        <h1 className="text-[54px] font-bold text-[#001F3F] mb-4">{project.title}</h1>
        <p className=" text-gray-700 mb-10">{project.overview}</p>
      </ScrollReveal>  

      <ScrollReveal>
        <h2 className="text-[24px] font-semibold text-[#001F3F] mb-4">Goals</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {project.goals?.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </ScrollReveal> 

      <ScrollReveal>
        <h2 className="mt-10 text-[24px] font-semibold text-[#001F3F] mb-4">Design Process</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {project.designProcess?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </ScrollReveal>   

      {Array.isArray(project.softwareUsed) && project.softwareUsed.length > 0 && (
        <ScrollReveal delay={0.3}>
          
          <div className="flex items-center mb-4 gap-2 mt-10">
              <div className="w-4 h-4 rounded-full bg-[#00008030] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#001F3F] rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-[#001F3F]">Font Used</h2>
            </div>
          <ul className="list-disc pl-5 text-gray-700">
            {project.softwareUsed.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </ScrollReveal>
      )}

      {project.colors?.values && project.colors.values.length > 0 && (
        <ScrollReveal delay={0.3}>
          <section className="mt-10">
            <div className="flex items-center mb-4 gap-2">
              <div className="w-4 h-4 rounded-full bg-[#00008030] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#001F3F] rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-[#001F3F]">Colors Used</h2>
            </div>

            <div className="flex justify-start gap-6 flex-wrap">
              {project.colors.values.map((color, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-1 group">
                  <svg
                    className="w-16 h-16 transition-all duration-500 group-hover:scale-105"
                    viewBox="0 0 100 100"
                    fill={color.hex}
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
        </ScrollReveal>
      )}

      {Array.isArray(project.variations) && project.variations.length > 0 && (
        <ScrollReveal delay={0.2}>
          <h2 className="mt-10 text-[24px] font-semibold text-[#184585] mb-4">Posters</h2>
          <div className="flex flex-wrap gap-6">
            {project.variations.map((img, i) => (
              <div
                key={i}
                className="w-[600px] bg-white rounded-xl shadow-md flex items-center justify-center p-4"
              >
                <Image
                  src={img}
                  alt={`Poster Variant ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      

      {project.reflection && (
        <ScrollReveal delay={0.4}>
          <div className="mt-10 p-4 bg-[#00008030] rounded-lg shadow">
            <h3 className="font-semibold text-[#001F3F] mb-2">Feedback Received</h3>
            <p className="text-sm text-[#444]">{project.reflection}</p>
          </div>
        </ScrollReveal>
      )}
    </div>
    <BackToHomeButton />
      <Footer />
    </>
  );
};

export default FellowshipProjectDetail;
