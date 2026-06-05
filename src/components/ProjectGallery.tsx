import Image from 'astro/components/Image.astro';
import React from 'react';

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
          <div className='flex flex-col items-center mb-[60px]'>
            <div className='font-script text-[24px] md:text-[36px] flex items-center justify-center space-x-1.5 text-black mb-1'>
              <span>Scroll to</span>
              <span className='relative inline-block mx-1'>
                <span className='!z-10'>explore</span>
                {/* Cyan hand-drawn style circle behind "explore" */}
                <div className='absolute top-1/8 md:top-1/4 block z-1'>
                  <svg
                    width='98'
                    height='31'
                    viewBox='0 0 98 31'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-[100%] z-0'>
                    <path
                      d='M59.6944 3.55713C45.5469 3.7815 31.3994 4.00588 23.3686 4.39947C11.1321 4.99919 7.30602 9.44464 4.75016 12.4965C2.48445 15.2019 1.61571 19.2268 1.50094 22.4706C1.47554 23.1885 1.96871 23.6754 2.49319 24.1676C3.01766 24.6599 3.74531 25.107 9.11461 26.1112C14.4839 27.1154 24.4728 28.663 36.0484 29.2376C47.6239 29.8122 60.4834 29.3667 69.3615 28.6389C78.2396 27.9111 82.7466 26.9146 85.8326 26.0073C93.1103 23.8676 95.1669 20.5396 96.0056 19.0603C96.4287 18.314 96.6364 17.3549 96.4022 15.9098C96.1679 14.4647 95.4317 12.506 93.6968 10.8393C91.9619 9.17272 89.2507 7.8576 84.3 6.39235C79.3492 4.92709 72.2412 3.35157 67.6091 2.50226C62.9771 1.65296 61.0363 1.57762 59.0367 1.5'
                      stroke='#8AE2E6'
                      strokeWidth='3'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              </span>
              <span className='z-11'>my</span>
            </div>

            <h2 className='text-[36px] md:text-[64px] h-fit font-black tracking-[0.05em] uppercase text-black relative letter-spacing-[1%]'>
              PROJECTS
              {/* Hand-drawn curved arrow */}
              <div className='absolute right-[-50%] top-[-50%] block scale-50 md:scale-100'>
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
              </div>
            </h2>
          </div>

          {/* Project Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-20 lg:gap-x-20'>
            {projects.map((project) => (
              <a
                href={`/portfolio/projects/${project.slug}`}
                key={project.client}
                className='group cursor-pointer flex flex-col min-w-0'>
                {/* Image Container */}
                <div
                  className='aspect-[1.4/1] rounded-[24px] overflow-hidden shadow-sm border-[4px] border-white transition-transform duration-500 group-hover:-translate-y-2 mb-4 bg-gray-100'
                  style={{ boxShadow: '0px 0px 10px 0px #00000040' }}>
                  <img
                    src={typeof project.image === 'string' ? project.image : project.image.src}
                    alt={project.client}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                </div>

                {/* Text Container */}
                <div className='space-y-1 pl-1 flex flex-col min-w-0'>
                  <div className='flex items-start space-x-2 min-w-0'>
                    <h3 className='text-[18px] md:text-[24px] font-bold text-black truncate shrink'>
                      {project.client}
                    </h3>
                    <svg
                      width='44'
                      height='20'
                      viewBox='0 0 44 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-[24px] h-[24px] mt-1 shrink-0'>
                      <path
                        d='M1.50012 11.0216C7.23486 10.3883 15.2217 10.2694 21.3176 10.0119C29.2377 9.8674 34.8663 9.86505 35.8906 9.95062C36.4065 9.97971 36.9148 9.97971 38.4653 10.1508'
                        stroke='black'
                        strokeWidth='3'
                        strokeLinecap='round'
                      />
                      <path
                        d='M30.6796 1.5C31.5832 2.57473 36.0156 6.55533 39.8199 8.99401C40.9468 9.71634 42.8507 10.2142 41.5265 11.5799C40.2022 12.9455 35.6917 14.9786 33.1682 16.1671C30.6448 17.3557 30.2451 17.638 28.9683 18.2712'
                        stroke='black'
                        strokeWidth='3'
                        strokeLinecap='round'
                      />
                    </svg>
                  </div>
                  <div className='text-[16px] md:text-[18px] font-[400] text-[#5D5D5D] truncate'>
                    {project.category}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
