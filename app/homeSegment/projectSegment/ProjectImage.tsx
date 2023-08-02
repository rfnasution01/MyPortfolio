import { Link } from '@/components/Link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ProjectImageProps {
    item: ProjectItem;
    idx: number;
}

interface ProjectItem {
    picture: string;
    name: string;
    demo: string;
  }

const ProjectImage: React.FC<ProjectImageProps> = ({ item, idx }) => {
    const [isHover, setIsHover] = useState(false);
    const [id, setId] = useState(0);
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

    const hoverEnter = (id: number) => {
        setIsHover(true)
        setId(id)
    }

    const hoverLeave = (id: number) => {
        setIsHover(false)
        setId(id)
    }

    return (
        <Link
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
            style={{
              gridArea: 'aside',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              margin: 0,
            }}
          >
            <Image
              onMouseEnter={() => hoverEnter(idx)}
              onMouseLeave={() => hoverLeave(idx)}
              src={item.picture}
              alt={item.name}
              width= {isMobile ? 350: 450} 
              height={isMobile ? 180: 240}
              style={{
                transition: 'transform 0.3s',
                transform: isHover && idx === id ? 'translateY(-20px)': '',              
              }}
            />
          </Link>
    )
}
export default ProjectImage
