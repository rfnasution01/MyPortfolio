'use client'

import { Nav } from '@/components/Navbar'
import React, { useState } from 'react'
import { menuAbout } from './MenuAbout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { H4 } from '@/components/headings'

const AboutAside = () => {
  const [isHover, setIsHover] = useState(false);
  const [id, setId] = useState(null);
  const pathname = usePathname();

  const pathArray = pathname?.split('/') ?? [];
  const path = pathArray[2] ?? null;

  const handleMouseEnter = (item: any) => {
    setId(item);
    setIsHover(true);
  };

  const handleMouseLeave = (item: any) => {
    setId(item);
    setIsHover(false);
  };
  return (
    <Nav 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      {menuAbout.map((menu, idx) => (
        <Link
          key={idx}
          href={`/about/${menu.links}`}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(id)}
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            margin: '8px',
            color:
              path === null && menu.name === 'Summary' ?
                '#5c5c5c' : 
              path === menu.links
                ? '#5c5c5c': 
              idx === id && isHover                  
                ? '#5c5c5c': 
              '#bfbfbf',
            }}
          >
          <H4>{menu.name}</H4>
        </Link>
      ))}
    </Nav>
  )
}

export default AboutAside
