import { Link } from '@/components/Link';
import React, { useState } from 'react';

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
            <img
              onMouseEnter={() => hoverEnter(idx)}
              onMouseLeave={() => hoverLeave(idx)}
              src={item.picture}
              alt={item.name}
              width={450}
              style={{
                transition: 'transform 0.3s',
                transform: isHover && idx === id ? 'translateY(-20px)': '',              
              }}
            />
          </Link>
    )
}
export default ProjectImage
