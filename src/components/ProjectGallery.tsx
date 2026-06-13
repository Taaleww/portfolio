import React from 'react';
import ProjectCard from './ProjectCard';
import circleDraw from '../assets/circleDraw.png';

interface Project {
  title: string;
  category: string;
  description: string;
  image: any; // Changed from string to any to support Astro ImageMetadata
  overviewImage?: any;
  otherImages?: any[];
  liveUrl?: string;
  repoUrl?: string;
  client: string;
  techStack: string[];
  slug: string; // Added slug
}

interface Props {
  projects: Project[];
}

const ProjectGallery: React.FC<Props> = ({ projects }) => {
  return (
    <section id='projects' className='py-5 px-5'>
      <div className='bg-[#F5F5F5] w-full rounded-[24px]'>
        <div className='max-container pt-8 md:pt-[80px] pb-[120px] px-6 md:px-12 lg:px-24'>
          {/* Section Header */}
          <div className='flex flex-col items-center mb-[60px]' data-animate='fade-up'>
            <div className='font-script text-[24px] md:text-[36px] flex items-center justify-center space-x-1.5 text-black mb-1'>
              <span>Scroll to</span>
              <span className='relative inline-block mx-1'>
                <span className='z-10 relative'>explore</span>
                {/* Cyan hand-drawn style circle behind "explore" */}
                   <img
                  src={circleDraw.src}
                  alt='circle draw'
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block z-0 w-[100%] md:w-[220px]  max-w-[110px] pointer-events-none'
                />
              </span>
              <span className='z-11 ml-1'>my</span>
            </div>

            <h2 className='text-[36px] md:text-[64px] h-fit font-black uppercase text-black relative letter-spacing-[1%]'>
              PROJECTS
              {/* Hand-drawn curved arrow */}
              {/* <div className='absolute right-[-50%] top-[-50%] block scale-50 md:scale-100'>
                <svg width='143' height='148' viewBox='0 0 143 148' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_2078_867)'>
                    <path
                      d='M57.0327 119.362C61.1105 119.724 65.1987 120.057 69.2645 120.548C74.6728 121.176 80.0119 121.813 85.3581 122.619C86.4925 122.783 87.7697 123.296 88.6172 124.091C90.1871 125.471 89.4396 127.703 87.3469 128.102C86.5338 128.25 85.6545 128.208 84.8357 128.088C74.3416 126.492 63.7715 125.436 53.1669 124.925C48.6228 124.666 44.034 124.723 39.4764 124.692C38.1618 124.664 37.0289 124.401 36.316 123.221C35.5354 121.951 35.4484 120.59 36.3084 119.362C36.9867 118.369 37.7918 117.487 38.6647 116.695L62.4997 95.8732C63.2617 95.2088 64.0342 94.5148 64.8448 93.9007C66.0174 92.9144 67.2348 92.8414 68.0026 93.6751C68.7999 94.5192 68.6717 95.7377 67.5565 96.8438C65.1771 99.1036 62.69 101.293 60.2811 103.542L49.1565 114.147L48.4311 114.99L49.5025 114.767C62.9939 109.511 76.6089 104.565 89.909 98.9095C99.422 94.8025 108.193 89.1403 115.864 82.1541C122.104 76.5233 126.789 69.8499 128.475 61.4299C129.683 55.1365 129.525 48.9636 125.905 43.409C123.253 39.2563 119.717 35.925 115.616 33.2609C107.392 28.1142 97.9411 25.2681 88.2406 25.0166C69.5092 23.9745 50.8128 27.786 33.9494 36.0844C32.3654 36.8271 30.9066 37.7798 29.4095 38.6525C28.0217 39.497 27.1511 39.5251 26.4822 38.6927C25.8826 37.8513 26.0682 36.7525 27.2791 35.8461C29.1308 34.4325 31.0033 32.9595 33.0464 31.9452C52.7233 21.7481 75.1056 18.0841 96.9585 21.4827C106.3 22.8877 114.824 26.5338 122.141 32.6837C130.152 39.4083 134.578 47.6722 133.585 58.4627C132.918 65.5769 130.54 72.0927 126.52 78.0012C121.711 85.0301 115.249 90.3503 108.397 95.2685C97.4559 103.078 85.2288 108.41 72.7546 113.124L58.1711 118.663C57.7725 118.856 57.3946 118.99 57.0168 119.124L57.0622 119.372L57.0327 119.362Z'
                      fill='black'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2078_867'>
                      <rect width='110' height='118' fill='white' transform='translate(38.9548) rotate(19.2764)' />
                    </clipPath>
                  </defs>
                </svg>
              </div> */}
            </h2>
          </div>

          {/* Project Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-20 lg:gap-x-20'>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                image={project.image}
                animateDelay={(index % 2) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
