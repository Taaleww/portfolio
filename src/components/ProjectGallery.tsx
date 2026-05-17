import React, { useState, useMemo } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  techStack: string[];
}

interface Props {
  projects: Project[];
}

const ProjectGallery: React.FC<Props> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const tags = useMemo(() => {
    const allTags = projects.flatMap((p) => p.techStack);
    return ['All', ...new Set(allTags)].sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <section id='projects' className='py-32 bg-[#eeeeee] w-full mt-20'>
      <div className='max-container px-6 md:px-12 lg:px-24'>
        <div className='flex flex-col items-center mb-20 space-y-4'>
          <div className='text-[10px] uppercase font-bold tracking-[0.3em] text-black/30'>Scroll down to find my</div>
          <h2 className='text-6xl font-black italic tracking-tighter uppercase relative'>
            Projects
            <div className='absolute -top-4 -right-12'>
              <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                <path d='M7 17L17 7M17 7H7M17 7V17' />
              </svg>
            </div>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'>
          {filteredProjects.map((project, index) => (
            <div key={project.title} className='group cursor-pointer'>
              <div className='aspect-[4/3] rounded-[2rem] overflow-hidden bg-white mb-6 p-4 shadow-sm transition-transform duration-500 hover:-translate-y-2'>
                <div className='w-full h-full rounded-[1.5rem] overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
              </div>

              <div className='space-y-1 pl-4'>
                <div className='flex items-center space-x-2'>
                  <h3 className='text-xl font-bold'>{project.title}</h3>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='transition-transform group-hover:translate-x-1'>
                    <path d='M5 12h14M12 5l7 7-7 7' />
                  </svg>
                </div>
                <div className='text-xs uppercase font-bold tracking-widest text-black/30'>{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
