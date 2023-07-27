'use client'

import { Figure } from '@/components/Figure'
import { Paragraph } from '@/components/Paragraph'
import { Section } from '@/components/Section'
import { H2, H5 } from '@/components/headings'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
 
export default function NotFound() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Section>
      <Figure>
        <Image 
          src="/not-found.png" 
          alt="404 Not Found"
          width={320}
          height={240}
          style={{
            borderRadius: '10px',
          }}
        />
      </Figure>
      <H2
        style={{
          fontFamily: 'serif',
          fontStyle: 'normal',
          lineHeight: '130%',
          letterSpacing: '0.02em',
          color: '#808080',
        }}
      >Page Not Found</H2>
      <Paragraph 
        style={{
          fontFamily: 'serif',
          fontStyle: 'normal',
          lineHeight: '200%',
          letterSpacing: '0.02em',
          color: '#333333',
          marginBottom: '30px',
        }}
      >Could not find requested resource</Paragraph>
      
      <Link href="/">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',            
            gap: '4px',
            backgroundColor: '#808080',
            padding: '8px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
            opacity: isHover ? '1' : '0.7',
            cursor: 'pointer', 
          }}
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>setIsHover(false)}
        >
          <Image src='/home.svg' alt="Back to home" width={20} height={20} />
          <H5
            style={{
              color: isHover ? '#fffff0': '#fff',
            }}
          >Back to home</H5>
        </div>
      </Link>
    </Section>
  )
}