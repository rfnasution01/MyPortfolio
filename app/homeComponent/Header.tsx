'use client'

import { H3, H4 } from '@/components/headings';
import React, { useState, useEffect } from 'react';
import { menuNavbar } from './MenuNavbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Image from 'next/image';
import MenuList from './MenuList';

interface IsMobileProps {
  isMobile: boolean;
}

const HeaderSection : React.FC<IsMobileProps> = ({isMobile}) => {
  const [isShow, setIsShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  

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
        <Image
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
      {
        isMobile ? 
          <div 
            onClick={()=>setIsShow(true)}
            style={{
              cursor: 'pointer',
            }}
          >
            <Image 
              src='/menu.png' 
              alt="menu"
              width={36}
              height={36}
            />
          </div>
        :
          <MenuList isMobile={isMobile} />
      }

      {isShow && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              padding: '13px 27px 13px 27px',
              cursor: 'pointer',              
            }}
            onClick={()=>setIsShow(false)}
          >
            <Image
              src="/close.png"
              alt='Close'
              width={36}
              height={36}
            />
          </div>
          <div 
            style={{ 
              color: '#fff', textAlign: 'center' 
            }}
          >
            <MenuList isMobile={isMobile} />
          </div>
        </div>
      )}
    </Section>
  );
};

export default HeaderSection;
