'use client'
import React, { useEffect, useState } from 'react';
import { Container } from '@/components/Container';
import { lisProject } from './ListProject';
import ProjectImage from './projectSegment/ProjectImage';
import ProjectDetail from './projectSegment/ProjectDetail';

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      setIsMobile(screenWidth < 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container
      style={{
        width: '100%',
      }}
    >
      {lisProject.map((item, idx) => (
        <article
          key={idx}
          style={{
            display: 'grid',
            minHeight: '80vh',
            gap: '10px',
            padding: isMobile ? '1rem': '0px 3rem 0px 3rem',
            gridTemplateAreas: 
              isMobile ?
                '"main" "aside"':
              idx % 2 === 0 ?
                '"aside main"':
                '"main aside"'  
          }}
        >
          <ProjectImage item={item} idx={idx}/>
          <ProjectDetail item={item} isMobile={isMobile} />
        </article>
      ))}
    </Container>
  );
};

export default Project;
