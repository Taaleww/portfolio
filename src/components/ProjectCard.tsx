import React from 'react';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: any; // Astro ImageMetadata or string
  /** animate index for stagger delay (0, 100, 200 ms) */
  animateDelay?: number;
  /**
   * 'gallery'  → main page grid  (aspect-[1.4/1], responsive title size)
   * 'related'  → Other Projects section in detail page (aspect-[4/3], fixed max-w)
   */
  variant?: 'gallery' | 'related';
}

// Arrow SVG shared between both usages
const ArrowSvg = ({ className }: { className?: string }) => (
  <svg
    width='44'
    height='20'
    viewBox='0 0 44 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className ?? 'w-[24px] h-[24px] mt-1 shrink-0'}>
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
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  category,
  image,
  animateDelay = 0,
  variant = 'gallery',
}) => {
  const imgSrc = typeof image === 'string' ? image : image?.src;
  const isRelated = variant === 'related';

  return (
    <a
      href={`/portfolio/projects/${slug}`}
      data-animate='fade-up'
      data-delay={String(animateDelay)}
      className='group cursor-pointer flex flex-col min-w-0'>
      {/* Image Container */}
      <div
        className={[
          'overflow-hidden rounded-[24px] border-[4px] border-white bg-gray-100 mb-4 transition-transform duration-500 group-hover:-translate-y-2',
          isRelated ? 'aspect-[4/3] md:max-w-[400px] max-h-[300px]' : 'aspect-[1.4/1]',
        ].join(' ')}
        style={{ boxShadow: '0px 0px 10px 0px #00000040' }}>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
      </div>

      {/* Text Container */}
      <div className={['space-y-1 pl-1 flex flex-col min-w-0', isRelated ? 'md:max-w-[400px]' : ''].join(' ')}>
        <div className={['flex items-start min-w-0', isRelated ? 'space-x-4' : 'space-x-2'].join(' ')}>
          <h3
            className={[
              'font-bold text-black truncate shrink',
              isRelated ? 'text-[24px]' : 'text-[18px] md:text-[24px]',
            ].join(' ')}>
            {title}
          </h3>
          <ArrowSvg
            className={
              isRelated
                ? 'shrink-0' // original had min-w-[40px] mt-[8px]
                : 'w-[24px] h-[24px] mt-1 shrink-0'
            }
          />
        </div>
        <div
          className={[
            'font-[400] text-[#5D5D5D] truncate',
            isRelated ? 'text-[18px]' : 'text-[16px] md:text-[18px]',
          ].join(' ')}>
          {category}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
