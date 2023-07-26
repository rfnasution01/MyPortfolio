'use client'

import { SvgIcon } from '@/components/SvgIcon';
import { H3, H4 } from '@/components/headings';
import React, { useState, useEffect } from 'react';
import { menuNavbar } from './MenuNavbar';
import { Nav } from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';

const HeaderSection = () => {
  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [id, setId] = useState(null);
  const pathname = usePathname();

  const pathArray = pathname?.split('/') ?? [];
  const path = pathArray[1] ?? null;

  const handleMouseEnter = (item: any) => {
    setId(item);
    setIsHover(true);
  };

  const handleMouseLeave = (item: any) => {
    setId(item);
    setIsHover(false);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section
      style={{
        backgroundColor: '#fff',
        position: 'fixed',
        top: isScroll ? '0' : '-100px', 
        transition: 'top 0.3s',
        zIndex: 1000,
        left: 0, 
        right: 0, 
        maxWidth: '100%', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 28px',
      }}
    >
      {/* --- Logo --- */}
      <Link
        href="/"
        style={{
          padding: '0px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          textDecoration: 'none',
          gap: '8px'
        }}
      >
        <SvgIcon
          src="/logo.svg"
          alt="Rivai Fansuri Nasution"
          width={40}
          height={40}
        />
        <H3
          style={{
            fontFamily: 'serif',
            fontStyle: 'normal',
            lineHeight: '130%',
            letterSpacing: '1px',
            color: '#bfbfbf',
            margin: 0, 
          }}
        >
          RF Nasution
        </H3>
      </Link>
      {/* --- Navbar --- */}
      <Nav>
        {menuNavbar.map((menu, idx) => (
          <Link
            key={idx}
            href={menu.links}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(id)}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
              margin: '8px',
              color:
                `/${path}` === menu.links
                  ? '#5c5c5c'
                  : idx === id && isHover
                  ? '#5c5c5c'
                  : '#bfbfbf',
            }}
          >
            <H4>{menu.name}</H4>
          </Link>
        ))}
      </Nav>
    </Section>
  );
};

export default HeaderSection;
