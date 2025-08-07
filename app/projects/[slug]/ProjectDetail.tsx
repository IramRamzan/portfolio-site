'use client';
import React from 'react';
import AppProjectDetail from "@/components/Rideasy";
import LogoProjectDetail from "@/components/CYS-logo";
import WebsiteProjectDetail from "@/components/securely";
import VirtualProjectDetail from "@/components/virtual-Assistant";
import EidProjectDetail from "@/components/Eid_Posters";
import RenovateProjectDetail from "@/components/Renovate";
import ContestProjectDetail from "@/components/Contest";
import FCAIProjectDetail from "@/components/FCAI";
import OmanProjectDetail from "@/components/oman";
import EncodersProjectDetail from "@/components/Encoders";
import FellowshipProjectDetail from "@/components/posters";
import TYMProjectDetail from "@/components/TYM-logo";
import type { Project } from '@/lib/projectsData';

interface Props {
  project: Project;
}

const ProjectDetail: React.FC<Props> = ({ project }) => {
  if (project.type === 'app') return <AppProjectDetail project={project} />;
  if (project.type === 'logo') return <LogoProjectDetail project={project} />;
  if(project.type==='website1') return <WebsiteProjectDetail project={project}/>;
  if(project.type==='website2') return <OmanProjectDetail project={project}/>;
  if(project.type==='website3') return <VirtualProjectDetail project={project}/>;
  if(project.type==='website4') return <RenovateProjectDetail project={project}/>;
  if(project.type==='website5') return <FCAIProjectDetail project={project}/>;
  if(project.type==='poster1') return <ContestProjectDetail project={project}/>;
   if(project.type==='poster') return <EidProjectDetail project={project}/>;
  if(project.type==='logo1') return <TYMProjectDetail project={project}/>;
  if(project.type==='poster2') return <FellowshipProjectDetail project={project}/>;
  if(project.type==='website6') return <EncodersProjectDetail project={project}/>;
  return <div>Unsupported project type</div>; 
};

export default ProjectDetail;
