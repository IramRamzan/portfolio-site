import ProjectDetail from './ProjectDetail';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projectsData'; 


interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}


export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
