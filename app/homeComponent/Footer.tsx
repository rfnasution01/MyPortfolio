'use client'
import React, { useState } from 'react';
import { Section } from '../../components/Section';
import { Link } from '../../components/Link';
import { SvgIcon } from '@/components/SvgIcon';

const Footer = () => {
  const [hoverState, setHoverState] = useState({
    in: false,
    wa: false,
  });

  const handleMouseEnter = (item: string) => {
    setHoverState((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item: string) => {
    setHoverState((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };

  return (
    <Section 
      style={{
        backgroundColor: '#f5f5f5',
        gap: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link
        href="https://linkedin.com/in/rivai-nasution"
        onMouseEnter={() => handleMouseEnter('in')}
        onMouseLeave={() => handleMouseLeave('in')}
        target='_blank'
        style={{
          transition: 'opacity 0.3s ease',
          opacity: hoverState.in ? '0.5' : '1',
        }}
      >
        <SvgIcon src="/linkedin.svg" alt="Linkedin" />
      </Link>

      <Link 
        href="https://api.whatsapp.com/send?phone=082298511578"
        onMouseEnter={() => handleMouseEnter('wa')}
        onMouseLeave={() => handleMouseLeave('wa')}
        target='_blank'
        style={{
          transition: 'opacity 0.3s ease',
          opacity: hoverState.wa ? '0.5' : '1',
        }}
      >
        <SvgIcon src="/whatsapp.svg" alt="Whatsapp" />
      </Link>
    </Section>
  );
};

export default Footer;
