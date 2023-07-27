import { Link } from '@/components/Link';
import { H1, H2, H3, H4 } from '@/components/headings';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProjectDetailProps {
    item: ProjectItem;
    isMobile: boolean;
}

interface ProjectItem {
    name: string;
    desc: string;
    skill: ProjectSkill[];
    demo: string;
}

interface ProjectSkill {
    name: string;
    logo: string;
}

const ProjectDetail : React.FC<ProjectDetailProps> = ({item, isMobile}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
       style={{
        gridArea: 'main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
       }}
    >
      <div
        style={{
          textAlign: 'center'
        }}
      >
        {/* --- Title --- */}
        <H1
          style={{
            fontFamily: 'serif',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '45px',
            lineHeight: '130%',
            letterSpacing: '1px',
            color: '#5c5c5c',
            marginBottom: '18px',
          }}
        >{item.name}</H1>
        {/* --- Description -- */}
        <H2
          style={{
            fontFamily: 'serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '130%',
            letterSpacing: '1px',
            color: '#5c5c5c',
            marginBottom: '18px',
          }}
        >{item.desc}</H2>
        {/* --- Skill --- */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '28px',
          }}
        >
          {
            item.skill?.map((skill, idx)=>(
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#E1F3E9',
                  padding: '8px',
                  borderRadius: '12px',
                  color: '#333',
                  gap: '10px',
                }}
                key={idx}
              >
                <H4
                  style={{
                    fontFamily: 'serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '130%',
                    letterSpacing: '1px',
                    color: '#5c5c5c',
                    textAlign: 'center',                                                                    
                  }}
                >{skill.name}</H4>
                  
                <Image 
                  src={skill.logo}
                  alt={skill.name}
                  width={20}
                  height={20}
                />
                  
              </div>
            ))
          }
        </div>
        {/* --- Demo --- */}
        <Link
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>setIsHover(false)}
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <H3
            style={{
              fontFamily: 'serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '130%',
              letterSpacing: '1px',
              color: isHover ? '#bfbfbf' : '#5c5c5c',
              textAlign: 'center',
            }}
          > Visit Website </H3>
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetail
